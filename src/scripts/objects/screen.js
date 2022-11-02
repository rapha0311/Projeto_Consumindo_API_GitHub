

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                         <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                         <div class="data">
                           <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                            <p>👤Seguidores:${user.followers}</p>
                            <p>👥Seguindo:${user.following}</p>
                          </div>`




        let eventsName = ''
        let eventsMessage = ''
        user.events.forEach(event => {
            if (event.payload.commits !== undefined) {
                eventsMessage += `<p>${event.payload.commits[0].message}</p>`
                eventsName += `<p>${event.repo.name} - </p>`
            }
            else {
                return
            }
        })


        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events-section">
                                            <h2>Eventos</h2>
                                            
                                            <div class="events-message">
                                            <div>${eventsName}</div> <br> <div>${eventsMessage}</div>
                                            </div>
                                            </div>`


        }





        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br><div class="span"><span>🍴${repo.forks}</span><span>⭐${repo.stargazers_count}</span><span>👀${repo.watchers}</span><span>👨‍💻${repo.language}</span></div></a></li>`)
        
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    }, renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}



export { screen }

