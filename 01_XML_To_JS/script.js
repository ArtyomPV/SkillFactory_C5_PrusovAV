const xmlData = `
				<list>
					<student>
						<name lang="en">
							<first>Ivan</first>
							<second>Ivanov</second>
						</name>
						<age>35</age>
						<prof>teacher</prof>
					</student>
					<student>
						<name lang="en">
							<first>Петр</first>
							<second>петров</second>
						</name>
						<age>58</age>
						<prof>driver</prof>
					</student>
				</list>
				`;
				
const listUsers = [];

const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlData, "text/xml");
const listNode = xmlDom.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");

studentNodes.forEach(studentNode => {

	const nameNode = studentNode.querySelector("name");
	const firstNode = nameNode.querySelector("first");
	const secondNode = nameNode.querySelector("second");
	const ageNode = studentNode.querySelector("age");
	const profNode = studentNode.querySelector("prof");
	const landAttr = nameNode.getAttribute("lang")

  const user = {
    lang: landAttr,
    first: firstNode.textContent,
    second: secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,

};
  listUsers.push(user)
  
})

const result = {list: listUsers}
console.log('result', result)