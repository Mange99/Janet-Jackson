export class UserService {

    public async getAllUsers(): Promise<any> {
        const response = await fetch('/api/users');
        return await response.json();
    }

    public async createUser(data: any): Promise<any> {
        
        console.log(JSON.stringify({user: data}));

        const response = await fetch(`http://localhost:3080/api/register/create-user`, {
            mode: "no-cors",
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: data})
        })
        return await response.json();
    }

    public async signIn(data: any): Promise<any> {
        const response = await fetch(`http://localhost:3080/api/login/signin`, {
            mode: "no-cors",
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: data})
        })
        return await response.json();
    }

    /*
    public async deleteTask(taskId: number): Promise<any> {
        const response = await fetch(`/api/task/${taskId}`, {method: 'DELETE'})
        return await response.json();
    }

    public async editTask(data: any): Promise<any> {
        const response = await fetch(`/api/task`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: data})
        })
        return await response.json();
    }
    */
}