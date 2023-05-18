// Fetch and parse the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Access the data and update the HTML elements
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('location').textContent = `${data.position}, ${data.location}`;

        // Education
        const educationList = document.getElementById('education');
        data.education.forEach(education => {
            const listItem = document.createElement('li');
            const universityLink = document.createElement('a');
            universityLink.href = education.url;
            universityLink.textContent = education.university;

            listItem.innerHTML = `${education.degree} - `;
            listItem.appendChild(universityLink);
            listItem.innerHTML += ` (${education.location})`;

            educationList.appendChild(listItem);
        });


        // Experience
        const experienceList = document.getElementById('experience');
        data.experience.forEach(experience => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <h4>${experience.title}</h4>
              <p>${experience.employer} (${experience.location})</p>
              <p>${experience.startDate} - ${experience.endDate}</p>
              <p>${experience.description}</p>
            `;
            experienceList.appendChild(listItem);
        });

        // Skills
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });

        // Interests
        const interestsList = document.getElementById('interests');
        data.interests.forEach(interest => {
            const listItem = document.createElement('li');
            listItem.textContent = interest;
            interestsList.appendChild(listItem);
        });
    });