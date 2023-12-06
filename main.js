const __siteMap__ = {
    technologies: [
        {icon: 'js.png', title: 'Javascript', progress : 100},
        {icon: 'js.png', title: 'HTML', progress : 100},
        {icon: 'js.png', title: 'CSS', progress : 80},
        {icon: 'js.png', title: 'C', progress : 60},
        {icon: 'js.png', title: 'SQL', progress : 90},
        {icon: 'js.png', title: 'UML', progress : 30}
    ],
    langues: [
        {icon: 'js.png', title: 'Français', progress : 100},
        {icon: 'js.png', title: 'Anglais', progress : 70}
    ],
    loisirs: [
        {icon: 'js.png', title: 'Football'}
    ],
    etudes: [
        {
            title: 'Informatique de gestion - IEPSA',
            period: '2023-2027',
            details: [
                'Bases du développement', 
                'Technologies de bases de données relationnelles', 
                'Gestion des réseaux'
            ]
        },
        {
            title: 'Informatique de gestion - IEPSA',
            period: '2023-2027',
            details: [
                'Bases du développement', 
                'Technologies de bases de données relationnelles'
            ]
        }
    ],
    experiences: [
        {
            title: 'Développeur full-stack chez Microsoft',
            period: '2020-2021',
            details: [
                'Design de l\'architecture SaaS et cloud des produits offices', 
                'Responsable de la refonte graphique de word', 
                'Développement de la plateforme AZURE'
            ]
        },
        {
            title: 'Développeur full-stack chez Microsoft',
            period: '2020-2021',
            details: [
                'Design de l\'architecture SaaS et cloud des produits offices', 
                'Responsable de la refonte graphique de word'
            ]
        },
        {
            title: 'Développeur full-stack chez Microsoft',
            period: '2020-2021',
            details: [
                'Design de l\'architecture SaaS et cloud des produits offices', 
                'Responsable de la refonte graphique de word', 
                'Développement de la plateforme AZURE'
            ]
        }
    ]
};

addEventListener("load", (event) => {
    document.getElementById('menu').style.display="none";
    
    renderCardMini('technologies', __siteMap__.technologies);
    renderCardMini('langues', __siteMap__.langues);
    renderCardMini('loisirs', __siteMap__.loisirs);
    renderCardDetails('etudes', __siteMap__.etudes);
    renderCardDetails('experiences', __siteMap__.experiences);

    document.getElementById('menu').onclick = () => window.scrollTo(0,0);

    document.addEventListener('scroll', () => {
        const menu = document.getElementById('menu');
        const height = document.getElementsByTagName('nav')[0].clientHeight;
        if (document.body.scrollTop > height || document.documentElement.scrollTop > height)
            menu.style.display="flex";
        else
            menu.style.display="none";
    });
});


const renderCardMini = (containerName, datas) => {
    const container = document.getElementById(containerName).getElementsByClassName('list-container')[0];

    datas.forEach(data => {
        const newActivity = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute('src', 'assets/' + data.icon);
        img.setAttribute('alt', data.title);
        newActivity.appendChild(img);

        const label = document.createElement('label');

        if (data.progress != undefined) {
            label.setAttribute('for', data.title);
        }
        label.innerHTML = data.title;
        
        newActivity.appendChild(label);
        
        if (data.progress != undefined) {
            const progress = document.createElement('progress');
            progress.setAttribute('id', data.title);
            progress.setAttribute('value', data.progress);
            progress.setAttribute('max', '100');
            progress.innerHTML = data.progress + '%';

            newActivity.appendChild(progress);
        }

        container.appendChild(newActivity);
    });
}

const renderCardDetails = (containerName, datas) => {
    const container = document.getElementById(containerName).getElementsByClassName('list-container')[0];

    datas.forEach(data => {
        const newActivity = document.createElement('article');
    
        const titleContainer = document.createElement('h3');
        const title = document.createElement('span');
        title.innerText = data.title;
        const period = document.createElement('span');
        period.innerText = data.period;
    
        titleContainer.appendChild(title);
        titleContainer.appendChild(period);
        newActivity.appendChild(titleContainer);
    
        const listContainer = document.createElement('ul');

        data.details.forEach(subData => {
            const listValue = document.createElement('li');
            listValue.innerText = subData;

            listContainer.appendChild(listValue);
        });
        newActivity.appendChild(listContainer);

        container.appendChild(newActivity);
    });
}