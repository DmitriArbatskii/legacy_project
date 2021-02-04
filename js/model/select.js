// let select = document.getElementById('studentName')
// let studentClass = document.getElementById('studentClass')
// let studentNumber = document.getElementById('studentNumber')

// for (element of data) {
//     let option = document.createElement('option')
//     option.innerHTML = element.studentName
//     option.value = element.studentName
//     select.append(option)
// }

// studentClass.innerHTML = data[0].studentClass
// studentNumber.innerHTML = data[0].studentNumber

// select.addEventListener('change', function() {
//     for (element of data) {
//         if (element.studentName === select.value) {
//             studentClass.innerHTML = element.studentClass
//             studentNumber.innerHTML = element.studentNumber
//         }
//     }
// }, false)

for (let i = 0; i < data.length; i++) {
    $('#studentName').append('<option value='+data[i].studentName+'>'+data[i].studentName+'</option>')
}

$('#studentClass').text(data[0].studentClass)
$('#studentNumber').text(data[0].studentNumber)

$('#studentName').on('change', function() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].studentName === $('#studentName').val()) {
            $('#studentClass').text(data[i].studentClass)
            $('#studentNumber').text(data[i].studentNumber)
        }
    }
})