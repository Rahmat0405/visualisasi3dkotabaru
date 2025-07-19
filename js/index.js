import { cesiumAccessToken, targetLocation } from "./cesiumConfig.js";

Cesium.Ion.defaultAccessToken = cesiumAccessToken;

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(1),
});

viewer.scene.globe.depthTestAgainstTerrain = true;

// ─────────────────────────────────────────────
// 1. Memuat Tileset
// ─────────────────────────────────────────────

async function loadTilesets() {
  const bethesdaTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3530985);
  viewer.scene.primitives.add(bethesdaTileset);

  const dinasTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3539775);
  viewer.scene.primitives.add(dinasTileset);

  const richeeseTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3540113);
  viewer.scene.primitives.add(richeeseTileset);

  const perpusTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3539789);
  viewer.scene.primitives.add(perpusTileset);

  const silolTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3539792);
  viewer.scene.primitives.add(silolTileset);

  const donateloTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3539786);
  viewer.scene.primitives.add(donateloTileset);

  const gerejaTileset = await Cesium.Cesium3DTileset.fromIonAssetId(3539788);
  viewer.scene.primitives.add(gerejaTileset);

  const bangunan1Tileset = await Cesium.Cesium3DTileset.fromIonAssetId(3554326);
  viewer.scene.primitives.add(bangunan1Tileset);

  const bangunan2Tileset = await Cesium.Cesium3DTileset.fromIonAssetId(3554327);
  viewer.scene.primitives.add(bangunan2Tileset);

  const bangunan3Tileset = await Cesium.Cesium3DTileset.fromIonAssetId(3554328);
  viewer.scene.primitives.add(bangunan3Tileset);

  const bangunan4Tileset = await Cesium.Cesium3DTileset.fromIonAssetId(3554329);
  viewer.scene.primitives.add(bangunan4Tileset);

  const bangunan5Tileset = await Cesium.Cesium3DTileset.fromIonAssetId(3554331);
  viewer.scene.primitives.add(bangunan5Tileset);

  await viewer.zoomTo([
    bethesdaTileset,
    dinasTileset,
    richeeseTileset,
    perpusTileset,
    silolTileset,
    donateloTileset,
    gerejaTileset,
    bangunan1Tileset,
    bangunan2Tileset,
    bangunan3Tileset,
    bangunan4Tileset,
    bangunan5Tileset,
  ]);
}

await loadTilesets();

// ─────────────────────────────
// 3. Create Label Texture Function
// ─────────────────────────────
function createLabelTexture(text) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const paddingX = 20;
  const paddingY = 12;
  const fontSize = 20;
  const fontFamily = "Roboto, sans-serif";

  ctx.font = `${fontSize}px ${fontFamily}`;
  const textWidth = ctx.measureText(text).width;

  canvas.width = textWidth + paddingX * 2;
  canvas.height = fontSize + paddingY * 2;

  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowBlur = 8;

  const radius = 8;
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(w - radius, 0);
  ctx.quadraticCurveTo(w, 0, w, radius);
  ctx.lineTo(w, h - radius);
  ctx.quadraticCurveTo(w, h, w - radius, h);
  ctx.lineTo(radius, h);
  ctx.quadraticCurveTo(0, h, 0, h - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();

  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#222";
  ctx.textBaseline = "middle";
  ctx.fillText(text, paddingX, h / 2);

  return canvas;
}

// ─────────────────────────────────────────────
// 2. Buat Data Label
// ─────────────────────────────────────────────

const places = [
  {
    lon: 110.374389,
    lat: -7.78381,
    height: 160,
    name: "Dinas Pariwisata",
    description: `
      <h2>Dinas Pariwisata</h2>
      <p>
      •	Per.Men Budpar RI No. PM.07/PW.007/MKP/2010.
      •	https://kebudayaan.kemdikbud.go.id 
      • Bangunan ini memiliki keterkaitan sejarah yang kuat dengan perjuangan gerilya Jenderal Sudirman, terutama sebagai lokasi akhir dari perjalanan gerilya beliau yang berlangsung selama tujuh bulan. Sebelumnya, bangunan ini merupakan kediaman dari Jenderal Urip Sumoharjo. Saat ini, bangunan tersebut telah mengalami beberapa perubahan, terutama pada bagian depan gedung utama serta penambahan di sisi kanan dan kiri bangunan. Di bagian depan gedung utama, terdapat sebuah monumen yang menjadi penanda bahwa lokasi ini pernah menjadi titik akhir rute gerilya Jenderal Sudirman. Informasi tersebut dituangkan pada lempengan tembaga yang bertuliskan: TETENGER Jalan Suroto.
      •	Sebelum berfungsi sebagai Kantor Dinas Pariwisata dan Kebudayaan, bangunan ini sempat difungsikan sebagai Kantor Transmigrasi. Struktur aslinya masih dipertahankan dengan baik. Denah bangunan berbentuk persegi empat, menghadap ke arah tenggara, dan terdiri dari tiga bagian utama. Atap bangunan bagian tengah berbentuk kerucut, sementara bagian kanan dan kiri menggunakan atap limasan. Secara keseluruhan, gaya arsitektur bangunan mencerminkan perpaduan antara arsitektur klasik, modern, dan tropis. Unsur klasik terlihat dari atap kerucut yang curam dan adanya vitrin pada jendela penerangan. Sementara itu, gaya modern tampak dari bentuk bangunan yang sederhana serta minim ornamen. Ciri khas tropis terlihat dari dinding yang dipenuhi jendela dan ventilasi berbentuk garis vertikal, dengan tritisan untuk melindungi jendela. Bagian bawah dinding atau sub-basement dilapisi dengan kerakal.
      •	Bangunan ini telah diresmikan sebagai Cagar Budaya berdasarkan Peraturan Menteri Kebudayaan dan Pariwisata RI No. PM.07/PW.007/MKP/2010. Lokasinya berada di Jalan Suroto No. 11, Kotabaru, Yogyakarta, dan saat ini berfungsi sebagai Kantor Dinas Pariwisata Kota Yogyakarta.
      .</p>
      <img src="./images/dinas.jpg" alt="Dinas Pariwisata" width="300">
    `,
  },
  {
    lon: 110.373048,
    lat: -7.783347,
    height: 160,
    name: "Richeese",
    description: `
      <h2>Richeese</h2>
      <p>
      •	per.Men Budpar RI No. PM.89/PW.007/MKP/2011.
      •	https://jogjacagar.jogjaprov.go.id
      •	Rumah tinggal milik Mr. Jody Gondokusumo berlokasi di Jalan Jenderal Sudirman No. 46, Kelurahan Kotabaru, Kecamatan Gondokusuman, Yogyakarta. Bangunan ini dulunya merupakan rumah pribadi yang berada di kawasan Kotabaru, sebuah lingkungan yang dahulu dikenal sebagai area pemukiman warga Belanda di Yogyakarta.
      •	Diperkirakan rumah ini dibangun sekitar tahun 1920-an, bertepatan dengan berkembangnya kawasan Kotabaru sebagai area permukiman pada awal abad ke-20. Pasca-kemerdekaan Indonesia, bangunan ini sempat mengalami perubahan fungsi, antara lain digunakan sebagai kantor bank maupun restoran. Pada akhir abad ke-19, pemerintah kolonial Belanda mulai mengadopsi gaya arsitektur Indis sebagai acuan dalam pembangunan gedung-gedung, baik yang dimiliki pemerintah maupun swasta. Gaya arsitektur ini terlihat jelas pada bangunan ini, antara lain dari adanya halaman yang luas, teras depan terbuka, langit-langit tinggi, bentuk gavel (segitiga di bawah atap) dengan ornamen setengah lingkaran bergaya Eropa, serta bukaan besar seperti jendela dan pintu krepyak (louvre) yang dilengkapi ventilasi atas (bouvenlicht) dan kanopi.
      •	Dinding bangunan dibuat tebal dan lantainya menggunakan beton ubin (concrete tiles) yang dikenal juga sebagai tegel, sebutan yang berasal dari nama pabrik pembuatnya. Salah satu ciri khas lainnya adalah keberadaan menara kecil (tower) sebagai sumber ventilasi dan pencahayaan, serta dormer—jendela yang menonjol dari permukaan atap dan memiliki atap sendiri seperti jendela di loteng.
      </p>
      <img src="./images/richeese.jpg" alt="Richeese" width="300">
    `,
  },
  {
    lon: 110.377467,
    lat: -7.783406,
    height: 160,
    name: "Rumah Sakit Bethesda",
    description: `
      <h2>Rumah Sakit Bethesda</h2>
      <p>
      •	No SK : 210/KEP/2010 Tanggal SK : 2010-09-02
      •	https://kebudayaan.kemdikbud.go.id 
      •	Rumah Sakit Bethesda didirikan oleh Dr. J.G. Scheurer, seorang dokter yang diutus oleh Nederlandse Zendingsvereniging. Pendirian rumah sakit ini terinspirasi oleh ayat Alkitab dari Lukas 10:9, yang berbunyi, "Sembuhkanlah orang-orang sakit yang ada di situ dan katakanlah kepada mereka: Kerajaan Allah sudah dekat padamu." Pada awal berdirinya, rumah sakit ini diberi nama Zendingsziekenhuis “Petronella”, sebagai bentuk penghormatan kepada Petronella, istri seorang pensiunan pendeta bernama Coeverden Andriani, yang telah memberikan bantuan dana pembangunan. Di kalangan masyarakat, rumah sakit ini lebih dikenal sebagai “Dokter Pitulungan” atau “Dokter Tulung”.
      •	Seiring waktu, Rumah Sakit Petronella mengalami berbagai perubahan mengikuti dinamika nasional dan global. Pada masa pendudukan Jepang, rumah sakit ini diambil alih oleh pihak Jepang dan diberi nama baru, yakni “Jogjakarta Tjuo Bjoin”. Pengambilalihan ini juga menghapus identitas Kristen dari rumah sakit tersebut. Namun setelah Jepang menyerah, rumah sakit tersebut berhasil dikembalikan ke prinsip awalnya sebagai institusi kesehatan Kristen, meskipun sempat berganti nama menjadi “Roemah Sakit Poesat”. Untuk memperjelas identitasnya sebagai rumah sakit Kristen yang melayani dengan kasih, maka pada tanggal 28 Juni 1950 nama rumah sakit tersebut secara resmi diubah menjadi “Rumah Sakit Bethesda”.
      </p>
      <img src="./images/bethesda.jpg" alt="Bethesda" width="300">
    `,
  },
  {
    lon: 110.37438,
    lat: -7.784575,
    height: 160,
    name: "Silol Kopi and Eatery",
    description: `
      <h2>Silol Kopi and Eatery</h2>
      <p>
      •	Berlokasi di Jalan Suroto No. 7, Kotabaru, SiLOL menempati sebuah bangunan tiga lantai yang telah direnovasi dengan tetap menjaga keaslian struktur serta nilai historisnya. Bangunan ini berada di kawasan Kotabaru yang merupakan area cagar budaya, dikenal dengan karakter arsitektur kolonial dan Indische modern yang mulai berkembang pada awal abad ke-20.</p>
      <img src="./images/silol.jpg" alt="Silol" width="300">
    `,
  },
  {
    lon: 110.37439,
    lat: -7.784868,
    height: 160,
    name: "Donatello",
    description: `
      <h2>Donatello</h2>
      <p>
      •	Bangunan ini termasuk salah satu rumah tinggal yang mengusung gaya arsitektur Indische. Struktur utamanya terhubung dengan bagian paviliun melalui sebuah koridor. Atap bangunan menggunakan genteng berbahan tanah liat, sementara kolom penyangga terbuat dari kayu. Unsur tradisional lainnya tampak pada ventilasi yang juga berbahan kayu, penggunaan kaca pada jendela, serta keberadaan ornamen dekoratif di bagian jurai atap.</p>
      <img src="./images/donatelo.jpg" alt="Donatello" width="300">
    `,
  },
  {
    lon: 110.371056,
    lat: -7.788319,
    height: 165,
    name: "Gereja Katolik Santo Antonius Padua",
    description: `
      <h2>Gereja Katolik Santo Antonius Padua</h2>
      <p>
      •	Per.Men Budpar RI No. PM.07/PW.007/MKP/2010.
      •	https://kebudayaan.kemdikbud.go.id 
      •	Romo F. Strater merupakan tokoh utama di balik pendirian Gereja Santo Antonius Kotabaru. Sebelum gereja berdiri, ia terlebih dahulu merintis berdirinya Kolese Santo Ignatius (Kolsani) beserta Novisiatnya sejak 18 Agustus 1922. Kolsani dilengkapi dengan sebuah kapel yang terbuka untuk masyarakat umum. Seiring bertambahnya jumlah umat, Romo Strater merasa perlunya dibangun sebuah gereja yang lebih luas dan memadai.
      •	Pembangunan gereja ini disertai dengan ketentuan bahwa namanya haruslah Santo Antonius dari Padua. Proses pembangunan selesai pada tahun 1926. Namun, ketika Jepang menduduki Indonesia pada tahun 1942, Kolsani dialihfungsikan menjadi tempat penampungan bagi para suster dan perempuan Belanda yang diinternir. Sementara itu, gedung Seminari Tinggi yang terletak di sebelah barat gereja dijadikan markas militer Jepang, dan Gereja Santo Antonius Kotabaru sendiri berubah fungsi menjadi gudang, sehingga tidak lagi dipakai untuk kegiatan ibadah.
      •	Pada tahun 1944, Romo Strater SJ yang merupakan pastor pertama di Kotabaru, dibunuh oleh tentara Jepang karena mengadakan pertemuan rahasia dengan para kepala sekolah Kanisius se-Yogyakarta. Karena gereja di Kotabaru sudah tidak digunakan, sebuah rumah kuno berbentuk joglo di daerah Kumetiran dipilih sebagai tempat ibadah sementara.
      •	Setelah kekalahan Jepang dalam Perang Dunia II pada tahun 1945, Kolsani dan Gereja Santo Antonius Kotabaru kembali difungsikan sebagai gereja. Bangunannya menghadap ke timur dengan denah memanjang dan atap berbentuk limasan, termasuk bagian kanopinya. Bagian depan gereja dilengkapi sebuah menara. Terdapat empat bagian atap, dengan yang tertinggi adalah menara lonceng di bagian tengah depan. Di bawahnya terdapat atap utama yang menaungi ruang tengah, kemudian atap ruang altar di sebelah barat yang lebih rendah, dan yang paling rendah adalah atap sisi kanan dan kiri ruang ibadah. Langit-langit gereja dibuat tinggi dengan bentuk sungkup dari tembok. Sebanyak 16 tiang penyangga terbuat dari semen cor. Di sisi selatan terdapat ruang persiapan upacara serta penyimpanan perlengkapannya, sementara sisi utara difungsikan sebagai ruang pengakuan dosa. Bangunan ini telah ditetapkan sebagai Cagar Budaya berdasarkan Peraturan Menteri Kebudayaan dan Pariwisata RI No. PM.07/PW.007/MKP/2010. Lokasi gereja berada di Jalan I Dewa Nyoman Oka No. 18, Yogyakarta.
      </p>
      <img src="./images/gereja.jpg" alt="Gereja" width="300">
    `,
  },
  {
    lon: 110.37445,
    lat: -7.78403,
    height: 170,
    name: "Perpustakaan Kota",
    description: `
      <h2>Perpustakaan Kota</h2>
      <p>
      •	Gedung ini awalnya dibangun sebagai hunian pribadi dengan gaya arsitektur Indische Empire atau Indo-Eropa, yang merupakan gaya khas masa kolonial Hindia Belanda. Pembangunannya diperkirakan berlangsung pada dekade 1920-an, bertepatan dengan pengembangan kawasan Kotabaru (Nieuwe Wijk). Kotabaru dirancang sebagai kawasan permukiman elit Eropa yang diperluas dari pusat kota Yogyakarta ke arah timur Sungai Code. Wilayah ini mengusung konsep garden city, yang ditandai dengan pola jalan radial, rumah-rumah megah yang dilengkapi taman, sistem drainase modern, serta fasilitas listrik dan air bersih yang lebih maju dibanding daerah lainnya saat itu.
      •	Desain bangunan menampilkan karakter khas arsitektur kolonial tropis, seperti langit-langit tinggi, jendela besar, banyak ventilasi untuk sirkulasi udara, teras depan yang luas, serta atap jurai yang curam dan ditutupi genteng.
      •	Selama masa pendudukan Jepang, beberapa rumah di Kotabaru—termasuk bangunan ini—dialihfungsikan sebagai fasilitas pendukung pemerintahan militer Jepang. Pasca-kemerdekaan Indonesia, gedung ini mengalami beberapa kali perubahan fungsi, hingga akhirnya ditetapkan sebagai Perpustakaan Kota Yogyakarta pada awal tahun 2000-an.
      </p>
      <img src="./images/perpus.jpg" alt="Perpustakaan Kota" width="300">
    `,
  },
];

places.forEach(place => {
  const texture = createLabelTexture(place.name);
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(place.lon, place.lat, place.height),
    billboard: {
      image: texture,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      scale: 1,
      scaleByDistance: new Cesium.NearFarScalar(
        1.0, 1.0,   // Near: scale 1
        1000.0, 0.5), // Far: scale 0.5
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    },
    description: place.description
  });
});


// ─────────────────────────────────────────────
// 5. Event Klik → InfoBox
// ─────────────────────────────────────────────

const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

handler.setInputAction(function (movement) {
  const pickedObject = viewer.scene.pick(movement.position);
  if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id)) {
    viewer.selectedEntity = pickedObject.id;
  } else {
    viewer.selectedEntity = undefined;
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// ─────────────────────────────────────────────
// 6. Fly ke Lokasi Awal
// ─────────────────────────────────────────────

viewer.camera.flyTo(targetLocation);
