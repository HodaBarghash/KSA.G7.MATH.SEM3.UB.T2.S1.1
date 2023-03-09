function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iQw390CDCk":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzY_5D1PTmAkM-6Z5PPqEnA7MT1pIgeQ0NPeXIXgix2L5NEKiKs0_svHFkRjikyfxgd2A/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

