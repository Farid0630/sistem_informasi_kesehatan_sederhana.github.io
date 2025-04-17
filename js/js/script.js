AOS.init();

$(document).ready(function () {
    $('#table_id').DataTable({
        responsive: true,
        pagingType: 'simple_numbers',
        language: {
            search: "Cari:",
            lengthMenu: "Tampilkan _MENU_ data",
            info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
            paginate: {
                previous: "Sebelumnya",
                next: "Berikutnya"
            }
        }
    });
});