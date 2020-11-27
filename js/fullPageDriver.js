TweenMax.defaultEase = Linear.easeOut;

    createFullPage();
   

    let headers = document.getElementsByTagName('h1');
    let firstheader = headers[0];
    let tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(firstheader, 0.5, { y: "-50", opacity: 0 }, { y: "0", opacity: 1 });
    let columns = document.querySelectorAll(".content");
    if (columns.length = 2) {
        tl.fromTo(columns[0], .5, { x: "-50", opacity: 0 }, { x: "0", opacity: 1 });
        tl.fromTo(columns[1], .5, { x: "50", opacity: 0 }, { x: "0", opacity: 1 });
    }






function createFullPage(){
    new fullpage('#fullPage', {
        licenseKey: 'DA5C4E34-DEE54132-A7CE51CB-4D3ED1AB',
        autoScrolling: true,
        navigation: true,
        responsive:1201,
        onLeave: (origin, destination, direction) => {
            let section = destination.item;
            let title = section.querySelector("h1");
            let tl = new TimelineMax({ delay: 0.5 });
            tl.fromTo(title, 0.5, { y: "-50", opacity: 0 }, { y: "0", opacity: 1 });
            let columns = section.querySelectorAll(".content");
            if (columns.length == 2) {
                tl.fromTo(columns[0], .5, { x: "-50", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(columns[1], .5, { x: "50", opacity: 0 }, { x: "0", opacity: 1 });
            }
            else if (columns.length == 3) {
                tl.fromTo(columns[0], .5, { x: "-50", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(columns[1], .5, { x: "50", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(columns[2], .5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
            
            }
        }
    });
}
    



