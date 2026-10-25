const backendHealthCheck = async () => {
    const response = await fetch("http://localhost:8080/api/health")
    const data = await response.json()

    console.log(data)
}


export default backendHealthCheck