// Get to DOM Elements

const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// console.log(gameContainer, userResult, cpuResult, result, optionImages);


// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index remove the active class from the other option image

            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        
        // Set timeout to delay the result calculation
        let time = setTimeout(() => {
            // Get the source of the clicked option image
        gameContainer.classList.remove("start");
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;
        

        let randomNumber = Math.floor(Math.random() * 3);
        // console.log(randomNumber);
        let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];

        cpuResult.src = cpuImages[randomNumber];    
        let cpuValue = ["R","P","S"][randomNumber];
        let userValue = ["R","P","S"][index];

        let outcomes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",
        };
        let outComeValue = outcomes[userValue + cpuValue];


        // Display Result
        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won !!!`;
        // console.log(outComeValue);


        }, 2500);

       
        // console.log( userValue,cpuValue);
    });
});
