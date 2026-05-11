const modelSelect = document.getElementById("modelSelect");
const modelSearch = document.getElementById("modelSearch");
const kitTitle = document.getElementById("kitTitle");
const itemCount = document.getElementById("itemCount");
const kitTableBody = document.getElementById("kitTableBody");
const resultBox = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const installBtn = document.getElementById("installBtn");

const allModels = Object.keys(generatorToKit).sort((a, b) => a.localeCompare(b, "it", { numeric: true }));

function populateModels(filter = "") {
  const current = modelSelect.value;
  modelSelect.innerHTML = '<option value="">-- seleziona modello --</option>';
  const q = filter.trim().toUpperCase();
  allModels
    .filter(model => model.toUpperCase().includes(q))
    .forEach(model => {
      const opt = document.createElement("option");
      opt.value = model;
      opt.textContent = `${model} → ${generatorToKit[model]}`;
      modelSelect.appendChild(opt);
    });
  if ([...modelSelect.options].some(o => o.value === current)) modelSelect.value = current;
}

function renderKit(model) {
  kitTableBody.innerHTML = "";
  resultBox.classList.add("hidden");
  if (!model) return;

  const kitCode = generatorToKit[model];
  const kit = kits[kitCode];
  kitTitle.textContent = `${model} — Kit raccomandato: ${kitCode}`;

  if (!kit || !Array.isArray(kit.items) || kit.items.length === 0) {
    kitTableBody.innerHTML = '<tr><td colspan="3" class="warning">Contenuto kit non disponibile.</td></tr>';
    itemCount.textContent = "";
    resultBox.classList.remove("hidden");
    return;
  }

  kit.items.forEach(item => {
    const part = parts[item.code] || { description: "Descrizione non disponibile" };
    const row = document.createElement("tr");
    row.innerHTML = `<td><strong>${item.code}</strong></td><td>${part.description}</td><td>${item.qty || 1}</td>`;
    kitTableBody.appendChild(row);
  });

  itemCount.textContent = `${kit.items.length} righe articolo nel kit`;
  resultBox.classList.remove("hidden");
}

async function copyTableToClipboard() {
  const model = modelSelect.value;
  if (!model) return;

  const kitCode = generatorToKit[model];
  const kit = kits[kitCode];
  if (!kit || !Array.isArray(kit.items) || kit.items.length === 0) return;

  const title = `${model} — Kit raccomandato: ${kitCode}`;

  let html = `
    <div>
      <p><strong>${escapeHtml(title)}</strong></p>
      <table style="border-collapse:collapse;width:100%;font-family:Arial,Helvetica,sans-serif;font-size:14px;">
        <thead>
          <tr>
            <th style="border:1px solid #cccccc;padding:8px;background:#f2f2f2;text-align:left;">Codice articolo</th>
            <th style="border:1px solid #cccccc;padding:8px;background:#f2f2f2;text-align:left;">Descrizione</th>
            <th style="border:1px solid #cccccc;padding:8px;background:#f2f2f2;text-align:left;">Quantità</th>
          </tr>
        </thead>
        <tbody>`;

  let text = `${title}

Codice articolo\tDescrizione\tQuantità
`;

  kit.items.forEach(item => {
    const part = parts[item.code] || { description: "Descrizione non disponibile" };
    const qty = item.qty || 1;

    html += `
      <tr>
        <td style="border:1px solid #cccccc;padding:8px;"><strong>${escapeHtml(item.code)}</strong></td>
        <td style="border:1px solid #cccccc;padding:8px;">${escapeHtml(part.description)}</td>
        <td style="border:1px solid #cccccc;padding:8px;">${qty}</td>
      </tr>`;

    text += `${item.code}\t${part.description}\t${qty}
`;
  });

  html += `</tbody></table></div>`;

  try {
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([text], { type: "text/plain" })
        })
      ]);
    } else {
      copyHtmlFallback(html);
    }
    showCopiedState();
  } catch (error) {
    copyHtmlFallback(html);
    showCopiedState();
  }
}

function showCopiedState() {
  const originalText = "Copia tabella";
  copyBtn.textContent = "Tabella copiata ✓";
  copyBtn.classList.add("success");
  setTimeout(() => {
    copyBtn.textContent = originalText;
    copyBtn.classList.remove("success");
  }, 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function copyHtmlFallback(html) {
  const temp = document.createElement("div");
  temp.contentEditable = "true";
  temp.style.position = "fixed";
  temp.style.left = "-9999px";
  temp.innerHTML = html;
  document.body.appendChild(temp);

  const range = document.createRange();
  range.selectNodeContents(temp);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  document.body.removeChild(temp);
}

modelSearch.addEventListener("input", () => populateModels(modelSearch.value));
modelSelect.addEventListener("change", () => renderKit(modelSelect.value));
copyBtn.addEventListener("click", copyTableToClipboard);

populateModels();


// PWA: registrazione service worker + pulsante installazione
let deferredInstallPrompt = null;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(error => {
      console.warn("Service worker non registrato:", error);
    });
  });
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installBtn) installBtn.classList.remove("hidden");
});

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installBtn.classList.add("hidden");
  });
}

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installBtn) installBtn.classList.add("hidden");
});
