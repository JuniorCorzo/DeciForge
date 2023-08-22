
const IDS_CONVERTS = ["#div-bi", "#div-hex", "#div-porcentaje", "#div-octa"]

$(document).ready(function () {
	$('#button-bi').click(function () {
		IDS_CONVERTS.forEach(id => {
			if (id !== "#div-bi"){
				$(id).hide();
			}
		})
		$("#div-bi").show()
	})

	$('#button-hex').click(function () {
		IDS_CONVERTS.forEach(id => {
			if (id !== "#div-hex"){
				$(id).hide();
			}
		})
		$("#div-hex").show()
	})

	$('#button-porcentaje').click(function () {
		IDS_CONVERTS.forEach(id => {
			if (id !== "#div-porcentaje"){
				$(id).hide();
			}
		})
		$("#div-porcentaje").show()
	})

	$('#button-octal').click(function () {
		IDS_CONVERTS.forEach(id => {
			if (id !== "#div-octa"){
				$(id).hide();
			}
		})
		$("#div-octa").show()
	})
})

