const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // Affichera 'pong'
  }
  
func()