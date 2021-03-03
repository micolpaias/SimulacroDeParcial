/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	var tipoAnimal; 
	var tipoPelaje;
	var edadDeAnimal;
	var nombreAnimal;
	var razaDeAnimal;
	var pesoAnimal;
	var estadoClinico;
	var temperaturaCorporal;
	var contadorPerro;
	var maxPesado;


	do 
	{
		tipoAnimal = prompt("Ingrese el tipo de mascota");
	} 
	while (tipoAnimal != "perro" && tipoAnimal != "gato" && tipoAnimal != "otro");
	do 
	{
		tipoPelaje = prompt("Ingrese el pelaje de la mascota");
	} 
	while (tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo");
	do 
	{
		nombreAnimal = prompt("Ingrese el nombre de la mascota");
	} 
	while (isNaN(nombreAnimal) == false);
	do 
	{
		edadDeAnimal = prompt("Ingrese la edad de la mascota");
	} 
	while (isNaN(edadDeAnimal) == true);
	do 
	{
		razaDeAnimal = prompt("Ingrese la raza de la mascota");
	} 
	while (isNaN(razaDeAnimal) == false);
	do 
	{
		pesoAnimal = prompt("Ingrese el peso de la mascota");
	} 
	while (isNaN(pesoAnimal) == true);
	do 
	{
		estadoClinico = prompt("Ingrese el Estado Clinico de la mascota");
	} 
	while (estadoClinico != "internado" && estadoClinico != "enfermo" && estadoClinico != "adopcion");
	do 
	{
		temperaturaCorporal = prompt("Ingrese la temperatura actual del animal mascota");
	} 
	while (isNaN(estadoClinico) == false);

	maxPesado = Math.max(pesoAnimal);
	

	//A - El perro mas pesado
		switch (tipoAnimal) 
		{
			case "perro":
				contadorPerro++;
				if (contadorPerro > 1 || maxPesado > pesoAnimal)
				{
					alert(maxPesado);
				}
				break;
		}
	//B - El porcentaje de enfermos sobre el total de mascotas


	//C - El nombre de la ultima mascota de tipo "otra cosa"

}