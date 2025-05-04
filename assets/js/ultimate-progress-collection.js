function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark"
}

function setTheme(e) {
    document.body.className = `theme-${e}`
}

function initializeProgress() {
    document.querySelectorAll(".bar[data-progress]").forEach(e => {
        const t = e.dataset.progress;
        setTimeout(() => {
            e.style.width = `${t}%`
        }, 100)
    }), document.querySelectorAll(".circular-progress .progress").forEach(e => {
        const t = e.dataset.progress,
            n = 289.027,
            r = n - (t / 100) * n;
        setTimeout(() => {
            e.style.strokeDashoffset = r
        }, 100)
    })
}

function simulateUpload() {
    const e = document.querySelector(".example-section .animated-progress .bar");
    let t = 0;
    e.style.width = "0%";
    const n = setInterval(() => {
        t += 1, e.style.width = `${t}%`, t >= 100 && clearInterval(n)
    }, 50)
}


function initializeProgress() {
    // Your existing initialization code
    document.querySelectorAll(".bar[data-progress]").forEach(bar => {
        const progress = bar.dataset.progress;
        setTimeout(() => {
            bar.style.width = `${progress}%`;
        }, 100);
    });

    document.querySelectorAll(".circular-progress .progress").forEach(circle => {
        const progress = circle.dataset.progress;
        const circumference = 289.027;
        const offset = circumference - (progress / 100) * circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    });

    // New initialization code for segmented progress
    document.querySelectorAll(".segmented-progress").forEach(container => {
        const progress = parseInt(container.dataset.progress);
        const segments = container.querySelectorAll('.segment');
        const segmentValue = 100 / segments.length;
        
        setTimeout(() => {
            segments.forEach((segment, index) => {
                if (progress >= (index + 1) * segmentValue) {
                    segment.style.transform = 'scaleX(1)';
                }
            });
        }, 100);
    });

    // Initialize stepped progress
    document.querySelectorAll(".stepped-progress").forEach(container => {
        const progress = parseInt(container.dataset.progress);
        const steps = container.querySelectorAll('.step');
        const stepValue = 100 / steps.length;
        
        setTimeout(() => {
            steps.forEach((step, index) => {
                if (progress >= (index + 1) * stepValue) {
                    step.classList.add('active');
                }
            });
        }, 100);
    });
}

// Your existing event listeners remain the same
document.addEventListener("DOMContentLoaded", initializeProgress);
