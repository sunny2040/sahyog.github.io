document.addEventListener('DOMContentLoaded', function () {
    const campaigns = [
        {
            title: "Education",
            description: "Sahyog care for you aims to be improving the education eminence in schools, to offer access to digital literacy and labs and to improve infrastructure in schools. The school therefore becomes the epicentre of information and awareness which will in turn improvise the standard of living in the community, also ensure child right to protection, health care, early childhood care and quality education, their participation in governance, safe and healthy living environment, and improved income of families for betterment of children’s future. Expence for one student for all these is Rs6000/- Per year",
            imageUrl: "images/img.jpg",
            endDate: new Date("2024-12-31"),
            progress: 28,
            amountRaised: 300000,
            currencySymbol: "₹"
        },
        {
            title: "Sanitary Napkin",
            description: "The price of poor menstrual hygiene can be devastating, even deadly. Here at home, women who are homeless or incarcerated face risks of cervical cancer and infections when they can’t access or afford sanitary products. So here is a chance for you to make a difference. You can, through our medium, donate for pads to someone who needs it. Our Pack( 8 pcs) costs Rs16/- . We are targeting 50000 female across the community.",
            imageUrl: "images/img (1).jpg",
            endDate: new Date("2024-12-31"),
            progress: 28,
            amountRaised: 800000,
            currencySymbol: "₹"
        },
        {
            title: "Old Age Home",
            description: "A roof over their heads is a critical need of the elder who are destitute, sick and abandoned by family and those uprooted by disasters. Sahyog care has established model recreational centre for the senior citizens and aged in places such as Delhi. Sahyog care supports 285 old age citizens of India. Sahyog Care aims to disabuse the popular mind-set that regards old age with a sense of pity for their helplessness. Replacing it with an attitude of confidence, fostering respect for them and encouraging fortitude in them. And bringing a little certainly, even fun into their lives. Support of Rs 7500/- is very helpful for one senior citizen to meet his requirement for fooding(Rs3500), lodging(Rs2000), and health(Rs1000) care on monthly basis.",
            imageUrl: "images/img (2).jpg",
            endDate: new Date("2024-12-31"),
            progress: 28,
            amountRaised: 225000,
            currencySymbol: "₹"
        }
    ];

    const campaignsContainer = document.getElementById('campaigns-carousel');

    campaigns.forEach(campaign => {
        const timeDiff = campaign.endDate.getTime() - Date.now();
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const campaignElement = document.createElement('div');
        campaignElement.className = 'item';
        campaignElement.innerHTML = `
            <div class="cause-entry">
                <a href="#" class="img" style="background-image: url(${campaign.imageUrl});"></a>
                <div class="text p-3 p-md-4">
                    <h3><a href="#">${campaign.title}</a></h3>
                    <p>${campaign.description}</p>
                    <span class="donation-time mb-3 d-block">${daysLeft} days left</span>
                    <div class="progress custom-progress-success">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: ${campaign.progress}%" aria-valuenow="${campaign.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="fund-raised d-block">${campaign.currencySymbol}${campaign.amountRaised.toLocaleString()}</span>
                </div>
            </div>
        `;
        campaignsContainer.appendChild(campaignElement);
    });

    // Initialize Owl Carousel
    $('#campaigns-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
