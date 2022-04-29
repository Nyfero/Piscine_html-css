var list = $("#ft_list");

function create_todo() {
	console.log(document.cookie);

	var a = prompt("Please enter a TO DO:");
	
	if (a)
	{
		let p = document.createElement('div');
		p.appendChild(document.createTextNode(a))
		p.onclick = function() {
			p.remove();
			document.cookie = encodeURIComponent(list.innerHTML);
		}
		list.appendChild(p);
		document.cookie = encodeURIComponent(list.innerHTML);
	}
	else
		create_todo();
}

list.innerHTML = decodeURIComponent(document.cookie);
for (let i = 0; i < list.children.length; i++) {
	list.children[i].onclick = function() {
		list.children[i].remove();
	document.cookie = encodeURIComponent(list.innerHTML);
	}
}
