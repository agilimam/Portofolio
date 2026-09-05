function openHeatmapModal() {
    document.getElementById('heatmapModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Matikan scroll background
}

function closeHeatmapModal() {
    document.getElementById('heatmapModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Aktifkan kembali scroll
}

// Tutup modal jika user mengklik area gelap di luar box modal
window.onclick = function (event) {
    const modal = document.getElementById('heatmapModal');
    if (event.target === modal) {
        closeHeatmapModal();
    }
}