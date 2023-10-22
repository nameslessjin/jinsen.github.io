const ExpContent = {
    header: {
        header: "Experience"
    },
    content: [
        {
            imageUrl: "images/ICT.png",
            videoUrl: "",
            titleUrl: "https://ict.usc.edu",
            title: "Institute for Creative Technologies",
            jobTitle: "Student Worker",
            width: "320",
            height: "160",
            imgWidth: '320',
            imgHeight: '160',
            duration: "May. 2023 - Present",
            description: "Created base pipeline, augmented data for the research on dense feature matching between UAV and Street View using PyTorch and PyTorch lightning. \
            Currently working on a Physically based rendering pipeline using WebGPU for the Next Gen Text-to-Avatar",
        },
        {
            imageUrl: "images/apple.png",
            videoUrl: "",
            titleUrl: "https://www.apple.com/",
            title: "Apple",
            jobTitle: "Software Engineer Intern",
            width: "320",
            height: "160",
            imgWidth: '320',
            imgHeight: '160',
            duration: "May. 2022 - Sep. 2022",
            description: "Constructed and integrated a Code Coverage Analysis server with Redis for robust performance, AWS S3 Bucket for file storage, Docker and Kubernetes for portability, and D3.js for data visualizations.",
        },
        {
            imageUrl: "images/cbl.png",
            videoUrl: "",
            titleUrl: "https://www.hippomenu.com/",
            title: "Columbia Build Lab - Hippo",
            jobTitle: "Software Engineer",
            width: "320",
            height: "160",
            imgWidth: '320',
            imgHeight: '160',
            duration: "Jan. 2022 - May. 2022",
            description: "Construct Admin portal frontend with React.js and backend with Node.js and deploy website on AWS EC2.  \
            Manage a 3-people software engineering team to build a scalable foundation for a startup and release alpha testing. ",
        }
    ]
}

const ProjectContent = {
    header: {
        header: "Computer Graphics",
        subheader: "Hover over or click projects to play"
    },
    content: [
        {
            imageUrl: "images/metal_demos.png",
            videoUrl: "images/metal_demos.mp4",
            titleUrl: "",
            title: "Metal Demos",
            github: "https://github.com/nameslessjin/Learning-Metal",
            width: "320",
            height: "180",
            imgWidth: '320',
            imgHeight: '180',
            duration: "Oct. 2023 (WIP)",
            description: "Venturing into the world of modern graphics with Metal as my guiding star! Proudly showcasing demos that feature cutting-edge rendering techniques: Physical-Based Rendering, Tile-Based Deferred Rendering, Shadow Mapping, and Particle and Flocking Systems. Enjoy!",

        },
        {
            imageUrl: "images/teapot.jpg",
            videoUrl: "images/rasterizer.mp4",
            titleUrl: "",
            title: "CPU Renderer",
            github: "",
            imgWidth: '180',
            imgHeight: '180',
            width: "320",
            height: "180",
            duration: "Sep. 2023 - Oct. 2023",
            description: "Crafted a CPU renderer from scratch in C++, showcasing components of the graphics pipeline.  Framebuffer management, depth testing and scanline algorithm for efficient rendering. \
                  Seamless space transformations from model to screen.  Enhanced texture quality with normal interpolation, UV perspective correction and bilinear interpolation.  Implemented Phong Shading for lightning effects.",

        },
        {
            imageUrl: "images/mocap.png",
            videoUrl: "images/mocap.mp4",
            titleUrl: "",
            title: "Mocap Interpolation",
            github: "https://github.com/nameslessjin/Mocap-Interpolation",
            imgWidth: '320',
            imgHeight: '180',
            width: "320",
            height: "180",
            duration: "Sep. 2023",
            description: "Investigate the effects of various interpolation methods (Linear and Bezier) and rotation representations (Euler angles and Quaternions) on quality of motion-captured animations.  The methodology involves selecting \
                  a sequence of N frames, isolating keyframes, and then interpolating the motion for the frames in between.  The resulting animation is compared to the origin to assess smoothness and any visual artifacts.",

        },
        {
            imageUrl: "images/spring.png",
            videoUrl: "images/spring.mp4",
            titleUrl: "",
            title: "Jello Spring System",
            github: "https://github.com/nameslessjin/Jello-Spring-System",
            imgWidth: '320',
            imgHeight: '240',
            width: "320",
            height: "240",
            duration: "Aug. 2023",
            description: "Jello Spring system is a physically-based mass-spring simulation of a cube situated within an external force field.  The simulation showcases both collisions and deformation. \
                    I designed the environment, drawing inspiration from the Cornell Box."
        },
        {
            imageUrl: "images/image5.jpeg",
            videoUrl: "images/monte_carlos.mp4",
            titleUrl: "",
            title: "Monte-Carlo CPU Ray Tracer",
            github: "https://github.com/nameslessjin/Monte-Carlo-CPU-Ray-Tracer",
            imgWidth: '320',
            imgHeight: '240',
            width: "320",
            height: "240",
            duration: "Apr. 2023",
            description: "A state-of-the-art ray tracer that harnesses the power of BVH, Monte Carlo and BRDF.  It is capable of rendering physically realistic opaque surface with reflections and soft shadows.\
                  I also add anti-aliasing (with stratified sampling) to enhance image quality."
        },
        {
            imageUrl: "images/coaster.png",
            videoUrl: "images/coaster.mp4",
            titleUrl: "",
            title: "Sunset Roller Coaster",
            github: "https://github.com/nameslessjin/Roller-Coaster-Simulator",
            imgWidth: '320',
            imgHeight: '180',
            width: "320",
            height: "180",
            duration: "Mar. 2023",
            description: "A roller coaster simulation implemented in OpenGL with phong shading.  The tracks were created with Catmnull Rom splines.  I also \
                  modified the velocity to make it physically realistic in  terms of gravity using height difference.  Enjoy your ride at sunset!"

        }
    ]
}