const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value


    const tempScale = document.getElementById('temp_diff')
    const valueTemp = temp_diff.options[tempScale.selectedIndex].value;
    //console.log(valueTemp)


    /* Celsious to Fahrenhit */
    let celToFah = (a) => {
        let fer = ((a * 9 / 5) + 32).toFixed(1)
        return fer
    }

    let fahToCel = (f) => {
        let cel = ((f - 32) * 5 / 9)
        return cel
    }


    if (valueTemp == 'Cel') {
        let result = celToFah(numberTemp)
        document.getElementById("result").innerHTML = celToFah(numberTemp) + "°Fahrenheit"
    }
    else {
        let result = fahToCel(numberTemp)
        document.getElementById("result").innerHTML = fahToCel(numberTemp) + "°Celsius "
    }
}