var list = document.getElementById("ft_list");

function create_todo() {
	console.log(document.cookie);

	var a = prompt("Please enter a TO DO:");
	console.log(a);
	
	
	if (a)
	{
		let p = document.createElement('div');
		p.appendChild(document.createTextNode(a))
		p.onclick = function() {
			if (confirm("are you sure ?"))
			{
				p.remove();
				document.cookie = encodeURIComponent(list.innerHTML);
			}
		}
		list.appendChild(p);
		console.log(encodeURIComponent(list.innerHTML));
		document.cookie = encodeURIComponent(list.innerHTML);
	}
	else
		create_todo()
}

list.innerHTML = decodeURIComponent(document.cookie);
for (let i = 0; i < list.children.length; i++) {
	list.children[i].onclick = function() {
		if (confirm("are you sure ?"))
		{	
			list.children[i].remove();
		}
		document.cookie = encodeURIComponent(list.innerHTML);
	}
}
