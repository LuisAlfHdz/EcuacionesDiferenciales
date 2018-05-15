
var a,b,c;
var raiz1 = 0;
var raiz2 = 0;
var img ;

function resolver(x,y,z) {
	obtenerRaices(x,y,z);
	obtenerEcuacionCaracteristica();
	(img == 0) ? obtenerYCReal(): obtenerYCImg();
}

function obtenerRaices(x,y,z){

	a = x;
	b = y;
	c = z;

	var cuadrado = Math.sqrt(b*b - 4*c*a);

	if ((b*b - 4*c*a) >= 0) {
		img = 0;
		raiz1 = (-b + Math.sqrt(b*b - 4*c*a))/(2*a);
		raiz2 = (-b - Math.sqrt(b*b - 4*c*a))/(2*a);
	}else{
		img = 1;
		raiz1 = (-b)/(2*a);
		raiz2 = Math.sqrt((b*b - 4*c*a)*(-1))/(2*a);
	}

};

function obtenerEcuacionCaracteristica(){

	var ecu = "";
	if (a != 0) {
		if (a > 1) { ecu += a + "m<sup>2</sup>"; }
		else if (a < 1) { ecu +="-"+a+ "m<sup>2</sup>";}
		else {ecu += "m<sup>2</sup>";}
	}
	if (b != 0) {
		if (b > 1) {
			if (a != 0) { ecu += "+"; } 
			ecu += b + "m";
		} 
		else {
			ecu +="-"+b+ "m";
		}
	}
	if (c != 0) {
		if (c > 1) {
			if (a != 0 || b != 0) { ecu += "+"; }
			ecu += c ;
		}
		else {ecu += "-" + c;}
	}
	if (a == 0 && b == 0 && c == 0) {ecu += "0";}

	ecu += " = 0";

	document.getElementById("EcCac").innerHTML = "Ecuacion Caracteristica";
	document.getElementById("ecuacion").innerHTML = ecu;
};

function obtenerYCReal() {
	var yc1;
	var yc2;
	var yc = "y<sub>c</sub> = ";

	if (raiz1 != 0) {
		if (raiz1 == 1) {yc1 = "e<sup>x</sup>"}
		else if (raiz1 == -1) {yc1 = "e<sup>-x</sup>"}
		else {yc1 = "e<sup>"+raiz1+"x</sup>"}
	}else {yc1 = 1}

	if (raiz2 == raiz1) {yc2 = "x"+yc1}
	else if (raiz2 != 0) {
		if (raiz2 == 1) {yc2 = "e<sup>x</sup>"}
		else if (raiz2 == -1) {yc2 = "e<sup>-x</sup>"}
		else {yc2 = "e<sup>"+raiz2+"x</sup>"}
	}else {yc2 = 1}

	if (yc1 == 1) { yc += "C<sub>1</sub> "}
	else{yc += "C<sub>1</sub>"+yc1+" "}

	if (yc2 == 1) { yc += "C<sub>2</sub> "}
	else{yc += "+ C<sub>2</sub>"+yc2+" "}

	document.getElementById("solucion").innerHTML = "Soluciones: ";
	document.getElementById("yc1").innerHTML = "y<sub>c1</sub> = "+yc1;
	document.getElementById("yc2").innerHTML = "y<sub>c2</sub> = "+yc2;
	document.getElementById("yc").innerHTML = yc;
}

function obtenerYCImg() {
	var yc1;
	var yc2;
	var yc = "y<sub>c</sub> = ";
	var term;

	if (raiz1 == 0) {yc1 = "";}
	else if (raiz1 == 1) {yc1 = "e<sup>x</sup>";}
	else if (raiz1 == -1) {yc1 = "e<sup>-x</sup>";}
	else {yc1 = "e<sup>"+raiz1+"x</sup>";}
	yc2 = yc1;

	if (raiz2 == 0) {term = "";}
	else if (raiz2 == 1) {term = "x";}
	else if (raiz2 == -1) {term = "x";}
	else {term = raiz2+"x";}

	yc1 +="cos("+term+")";
	yc2 +="sen("+term+")";

	yc += "C<sub>1</sub>"+yc1+" + "+"C<sub>2</sub>"+yc2;

	document.getElementById("solucion").innerHTML = "Soluciones: ";
	document.getElementById("yc1").innerHTML = "y<sub>c1</sub> = "+yc1;
	document.getElementById("yc2").innerHTML = "y<sub>c2</sub> = "+yc2;
	document.getElementById("yc").innerHTML = yc;
}