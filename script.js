var numbers = [1,2,3,4,5];

function sumIs (n)    {
	var summation = 0;

	// do the actual sum

	for(i=0; i<=n.lenght; i++)    {
		summation += n[i];
	}

	return summation;
}

console.log(sumIs ( numbers ));