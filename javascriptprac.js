function RunLength(str) { 
	var ctr=0,
	    output='',
	    data = str[0];

	for(var i=0; i<str.length; i++)
	{
		if(str[i] == data)
		{
			ctr++;
		}
		else
		{
			output += ctr+data;
			data = str[i];
			ctr = 1;
		}
	}

	output += ctr+data;
	return output;
}