// Function to determine the zodiac sign based on birthday
        function getZodiacSign(birthday) {
            const date = new Date(birthday);
            const month = date.getMonth() + 1;
            const day = date.getDate();

            if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
            if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
            if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
            if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
            if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
            if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
            if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
            if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
            if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
            if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
            if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
            if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
            return "Unknown";
        }

        // Function to handle form submission
        document.getElementById('horoscope-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Get user inputs
            const birthday = document.getElementById('birthday').value;
            const purpose = document.querySelector('input[name="purpose"]:checked').value;
            const belief = document.querySelector('input[name="belief"]:checked').value;

            // Determine zodiac sign
            const zodiacSign = getZodiacSign(birthday);
            document.getElementById('zodiac-sign').textContent = `Your Zodiac Sign: ${zodiacSign}`;

            // Set image based on purpose
            const imageMap = {
                "guidance": "https://example.com/guidance.jpg",
                "inspiration": "https://example.com/inspiration.jpg",
                "problem-solving": "https://example.com/problem-solving.jpg"
            };
            document.getElementById('horoscope-image').src = imageMap[purpose];

            // Set text and button based on belief
            const beliefTextMap = {
                "yes": "You believe in astrology! The stars are aligned for you.",
                "no": "There is no use in guiding you if you don't believe.",
                "i don't know yet": "You're unsure about astrology. Keep an open mind!"
            };
            document.getElementById('belief-text').textContent = beliefTextMap[belief];

            // Set button text and action based on belief
            const actionButton = document.getElementById('action-button');
            if (belief === "no") {
                actionButton.textContent = "Make Another Choice";
                actionButton.onclick = function () {
                    // Show form and hide horoscope section
                    document.getElementById('form-section').style.display = 'block';
                    document.getElementById('horoscope-section').style.display = 'none';
                };
            } else {
                actionButton.textContent = "Reveal Horoscope";
                actionButton.onclick = function () {
                    alert("Your horoscope is revealed! Check the details above.");
                };
            }

            // Hide form and show horoscope section
            document.getElementById('form-section').style.display = 'none';
            document.getElementById('horoscope-section').style.display = 'block';
        });