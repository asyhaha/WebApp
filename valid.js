function paparKeputusan(event) {
  event.preventDefault(); // Prevent form submission

  // Get values
  const tajuk = document.getElementById("tajuk").value.trim();
  const tarikhDari = document.getElementById("tarikhDari").value;
  const tarikhHingga = document.getElementById("tarikhHingga").value;
  const masaDari = document.getElementById("masaDari").value;
  const masaHingga = document.getElementById("masaHingga").value;
  const raptai = document.getElementById("raptai").value;
  const masaRaptai = document.getElementById("masaRaptai").value;

  // Lokasi radio buttons
  const lokasiRadios = document.getElementsByName("lokasi");
  let lokasi = "";
  for (const radio of lokasiRadios) {
    if (radio.checked) {
      lokasi = radio.value;
      break;
    }
  }
  if (lokasi === "Lain-lain") {
    const lainText = document.getElementById("lokasiLainText").value.trim();
    if (lainText) {
      lokasi = `Lain-lain: ${lainText}`;
    } else {
      alert("Sila nyatakan lokasi lain.");
      return;
    }
  }

  // Jumlah Penyertaan
  const vip = document.getElementById("vip").value || 0;
  const tetamu = document.getElementById("tetamu").value || 0;
  const pelajar = document.getElementById("pelajar").value || 0;

  // Nama Tetamu Kehormat
  const namaTetamuKehormat = document.getElementById("namaTetamuKehormat").value;
  let tetamu1 = "";
  let tetamu2 = "";
  if (namaTetamuKehormat === "ada") {
    tetamu1 = document.getElementById("tetamu1").value.trim();
    tetamu2 = document.getElementById("tetamu2").value.trim();
  }

  // Organisasi Penganjur
  const organisasi = document.getElementById("organisasi").value.trim();
  const penasihat = document.getElementById("penasihat").value.trim();
  const telPejabat1 = document.getElementById("telPejabat1").value.trim();
  const telBimbit1 = document.getElementById("telBimbit1").value.trim();
  const email1 = document.getElementById("email1").value.trim();

  // Butir-butir Pemohon
  const pemohon = document.getElementById("pemohon").value.trim();
  const jawatan = document.getElementById("jawatan").value.trim();
  const noPelajar = document.getElementById("noPelajar").value.trim();
  const fakulti = document.getElementById("fakulti").value.trim();
  const telPejabat2 = document.getElementById("telPejabat2").value.trim();
  const telBimbit2 = document.getElementById("telBimbit2").value.trim();
  const email2 = document.getElementById("email2").value.trim();

  // Simple required validation
  if (!tajuk || !tarikhDari || !tarikhHingga || !masaDari || !masaHingga || !pemohon) {
    alert("Sila isi semua maklumat wajib: Tajuk Majlis, Tarikh Majlis, Masa, dan Nama Pemohon.");
    return;
  }

  // Prepare output
  let output = `
    <h2>Maklumat Borang Dihantar:</h2>
    <h4>A. BUTIRAN MAJLIS</h4>
    <p><strong>Tajuk Majlis:</strong> ${tajuk}</p>
    <p><strong>Tarikh Majlis:</strong> ${tarikhDari} hingga ${tarikhHingga}</p>
    <p><strong>Masa Majlis:</strong> ${masaDari} hingga ${masaHingga}</p>
  `;

  if (raptai) {
    output += `<p><strong>Tarikh Raptai:</strong> ${raptai} Masa: ${masaRaptai || "-"}</p>`;
  }

  output += `<p><strong>Lokasi:</strong> ${lokasi}</p>`;

  output += `
    <p><strong>Jumlah Penyertaan:</strong> VIP: ${vip}, Tetamu: ${tetamu}, Pelajar: ${pelajar}</p>
    <p><strong>Tetamu Kehormat:</strong> ${namaTetamuKehormat.toUpperCase()}</p>
  `;

  if (namaTetamuKehormat === "ada") {
    output += `<p>&nbsp;&nbsp;Tetamu 1: ${tetamu1 || "-"}</p>`;
    output += `<p>&nbsp;&nbsp;Tetamu 2: ${tetamu2 || "-"}</p>`;
  }

  output += `
    <h4>B. ORGANISASI PENGANJUR</h4>
    <p><strong>Organisasi:</strong> ${organisasi || "-"}</p>
    <p><strong>Nama Penasihat/Pengerusi:</strong> ${penasihat || "-"}</p>
    <p><strong>Tel Pejabat:</strong> ${telPejabat1 || "-"}</p>
    <p><strong>Tel Bimbit:</strong> ${telBimbit1 || "-"}</p>
    <p><strong>Email:</strong> ${email1 || "-"}</p>

    <h4>C. BUTIR-BUTIR PEMOHON</h4>
    <p><strong>Nama Pemohon:</strong> ${pemohon}</p>
    <p><strong>Jawatan:</strong> ${jawatan || "-"}</p>
    <p><strong>No Kakitangan/No Pelajar:</strong> ${noPelajar || "-"}</p>
    <p><strong>Fakulti/Bhg/Pej:</strong> ${fakulti || "-"}</p>
    <p><strong>Tel Pejabat:</strong> ${telPejabat2 || "-"}</p>
    <p><strong>Tel Bimbit:</strong> ${telBimbit2 || "-"}</p>
    <p><strong>Email:</strong> ${email2 || "-"}</p>
  `;

  // Show output
  document.getElementById("result").innerHTML = output;

  alert("Borang berjaya dihantar!");
}
