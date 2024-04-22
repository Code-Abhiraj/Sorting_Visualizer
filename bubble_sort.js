var arr = [110,40,120,60,70,80,90,50,40,30,20,2];
        var parentDiv = document.getElementsByClassName('parentDiv');
        var btn = document.getElementsByClassName('startbtn');

        
        function getRandomColor() {
            const randomColor = () => Math.floor(Math.random() * 256);
            return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        }
        var i=0;
        arr.forEach(e => {
            var innerdiv = document.createElement('div');
            innerdiv.style.height = (e * 6 + 'px');
            innerdiv.style.backgroundColor = getRandomColor();
            innerdiv.setAttribute('id', 'elem' + i);
            i++;
            innerdiv.classList.add("innerdiv");
            parentDiv[0].appendChild(innerdiv);
        })

        btn[0].addEventListener("click", () => myFunction(arr));

        const sleep = (time) => {
            return new Promise(resolve => setTimeout(resolve, time));
        }

        async function myFunction(arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < (arr.length - i - 1); j++) {
                    await sleep(150);
                    if (arr[j] > arr[j + 1]) {
                        swapNumber(arr, j);
                        swapColorHeight(j);
                    }
                }
            }
        }

        function swapNumber(arr, j) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

        function swapColorHeight(j) {
            var a = 'elem' + j;
            var b = 'elem' + (j + 1);
            var e1 = document.getElementById(a);
            var e2 = document.getElementById(b);
            var bg1 = e1.style.backgroundColor;
            var bg2 = e2.style.backgroundColor;
            var h1 = e1.clientHeight;
            var h2 = e2.clientHeight;
            e1.style.backgroundColor = bg2;
            e2.style.backgroundColor = bg1;
            e1.style.height = h2 + "px";
            e2.style.height = h1 + "px";
        }