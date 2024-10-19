function updateyear() {
    const faculty = document.getElementById('faculty').value;
    const yearDropdown = document.getElementById('year');

   
    yearDropdown.innerHTML = '<option value="">Choose Year</option>';

   
    const yearOptions = {
        eng: ['Freshmen', '1st Year', '2nd Year', '3rd Year', '4th Year'],
        med: ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', '6th Year', '7th Year'],
        pha: ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year'],
        commerce: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
        applied: ['Freshmen','1st Year', '2nd Year', '3rd Year', '4th Year'],
        mass: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
        comp: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
        others: ['Freshmen', '1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', '6th Year'],
    };

    
    if (yearOptions[faculty]) {
        yearOptions[faculty].forEach((year) => {
            const option = document.createElement('option');
            option.value = year.toLowerCase().replace(/\s+/g, '-');
            option.textContent = year;
            yearDropdown.appendChild(option);
        });
    }
}
