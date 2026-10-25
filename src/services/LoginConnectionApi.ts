export const backendHealthCheck = async () => {
    const response = await fetch("http://localhost:8080/api/health")
    const data = await response.json()

    console.log(data)
}


export const loginAttempt = async (email: string, password: string) => {
    const payload = {
        email: email,
        password: password,
    }
    console.log("payload: " + JSON.stringify(payload))
    const response = await fetch("http://localhost:8080/api/login", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),

    })
    
    const data = await response.json()
    return data
}

