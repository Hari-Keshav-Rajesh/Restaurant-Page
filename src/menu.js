const menu = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const primary = document.createElement("div");
    primary.classList.add("primary");
    content.appendChild(primary);

        const title = document.createElement("div");
        title.classList.add('title');
        title.textContent = "Menu";
        primary.appendChild(title);
        
        const subtitle = document.createElement("div");
        subtitle.classList.add('subtitle');
        subtitle.textContent = "For the Pasta Romantics";
        primary.appendChild(subtitle);

        const secondary = document.createElement("div");
        secondary.classList.add("secondary");
        primary.appendChild(secondary);

            const lasagna = document.createElement("div");
            lasagna.classList.add("menuDiv");
            secondary.appendChild(lasagna);

                const lasagnaImage = document.createElement("img");
                lasagnaImage.classList.add("lasagnaImage","menuImage");
                lasagnaImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgsL9Q4iEnjIvApvzmMylWI-aORyLZQeACw&usqp=CAU"
                lasagna.appendChild(lasagnaImage);

                const lasagnaText = document.createElement("div");
                lasagnaText.classList.add("lasagnaText","menuText");
                lasagnaText.textContent = "Lasagna............................Rs250";
                lasagna.appendChild(lasagnaText);

            const spaghetti = document.createElement("div");
            spaghetti.classList.add("menuDiv");
            secondary.appendChild(spaghetti);

                const spaghettiImage = document.createElement("img");
                spaghettiImage.classList.add("spaghettiImage","menuImage");
                spaghettiImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBn4-wA7GdiLuQYxuLYYaSFzyaiX1YWffNQ&usqp=CAU"
                spaghetti.appendChild(spaghettiImage);

                const spaghettiText = document.createElement("div");
                spaghettiText.classList.add("spaghettiText","menuText");
                spaghettiText.textContent = "Spaghetti..........................Rs250";
                spaghetti.appendChild(spaghettiText); 
            
            const macaroni = document.createElement("div");
            macaroni.classList.add("menuDiv");
            secondary.appendChild(macaroni);

                const macaroniImage = document.createElement("img");
                macaroniImage.classList.add("macaroniImage","menuImage");
                macaroniImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdp-8-VwZB6V4dqmxE7TCS7WVE-573o3xGA&usqp=CAU"
                macaroni.appendChild(macaroniImage);

                const macaroniText = document.createElement("div");
                macaroniText.classList.add("macaroniText","menuText");
                macaroniText.textContent = "Macaroni...........................Rs250";
                macaroni.appendChild(macaroniText);

                const penne = document.createElement("div");
                penne.classList.add("menuDiv");
                secondary.appendChild(penne);
    
                    const penneImage = document.createElement("img");
                    penneImage.classList.add("penneImage","menuImage");
                    penneImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdp-8-VwZB6V4dqmxE7TCS7WVE-573o3xGA&usqp=CAU"
                    penne.appendChild(penneImage);
    
                    const penneText = document.createElement("div");
                    penneText.classList.add("penneText","menuText");
                    penneText.textContent = "Penne..............................Rs250";
                    penne.appendChild(penneText);

}

export {menu};