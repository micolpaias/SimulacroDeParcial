/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	var i;
	var continenteIngresado;
	var nombrePais;
	var numerodeHabitantes;
	var estadoEconomico;
	var temperaturaMinima;
	var cantidadTemperatura;
	var cantidadPaises;
	var menorCantidadHabitates;
	var suma;
	
	cantidadTemperatura = 0; 
	cantidadPaises = 0; 
	suma = 0; 
	for (i= 0; i < 2; i++) {
		do 
		{
			continenteIngresado = prompt("Ingrese el continente");
		} while (continenteIngresado != "America" && continenteIngresado != "Asia" && continenteIngresado != "Europa" && continenteIngresado != "Africa" && continenteIngresado != "Oceania");
		do 
		{
			nombrePais = prompt("Ingrese el nombre del pais");
		} while (isNaN(nombrePais) == false);
		do 
		{
			numerodeHabitantes = prompt("Ingrese la cantidad de habitantes por pais");
		} while (isNaN(numerodeHabitantes) == true && numerodeHabitantes < 0 || numerodeHabitantes > 7001 );
		do 
		{
			estadoEconomico = prompt("Ingrese el nivel de probreza");
			while (estadoEconomico == "Pobre" && continenteIngresado == "Europa")
			{
				estadoEconomico = prompt("No hay paises pobres en Europa, por favor ingrese nuevamente el nivel de pobreza");
			}
		} while (estadoEconomico != "Pobre" && estadoEconomico != "Rico" && estadoEconomico != "Muy Rico" );
		do 
		{
			temperaturaMinima = prompt("Ingrese la temperatura minima ");
		} while (isNaN(temperaturaMinima) == true && temperaturaMinima < -51 || temperaturaMinima > 51);
	}

			//a - cantidad temperaturas pares
			if (temperaturaMinima % 2 == 0) 
			{
				cantidadTemperatura++;
				alert("Hay " + cantidadTemperatura + " temperaturas pares");
			}
			else{
			//b - cantidad temperaturas impares en europa
				if (continenteIngresado == "Europa")
				{
					cantidadTemperatura++;
					alert("Hay " + cantidadTemperatura + " temperaturas impares en Europa");
				}
			}
			//c - El nombre del pais con menos habitantes
			menorCantidadHabitates = new Array;
			menorCantidadHabitates = menorCantidadHabitates.push(numerodeHabitantes);
			menorCantidadHabitates = Math.min(menorCantidadHabitates);
		
		

			//d - cantidad de paises que superen los 40 g
			if (temperaturaMinima < 39) 
			{
				cantidadPaises++;
				alert("Hay " + cantidadPaises + " paises que superan los 40 grados");
			}
			//e - cantidad de paises de america menos de 0 grados
			else 
			{
				if (continenteIngresado == "America")
				{
					cantidadPaises++;
					alert("Hay " + cantidadPaises + " paises que tienen menos de 0 grados grados");
				}
			}

			//f - promedio de hab entre paises ingresados
			if ( cantidadPaises[i] > 0 )
			{
					suma = numerodeHabitantes++;
			}
			operacionPromedio = suma / cantidadPaises;
			alert("El promedio de habitantes es: " +operacionPromedio )


} 