// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "A collection of my research publications and preprints in AI4Science, neuroscience, and cognitive science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-life",
          title: "life",
          description: "This is my amazing life.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/life/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-have-joined-the-brain-x-machine-intelligence-lab-at-kaist-as-a-research-intern",
          title: 'I have joined the Brain x Machine Intelligence Lab at KAIST as a...',
          description: "",
          section: "News",},{id: "news-i-have-joined-the-cognitive-ai-for-science-lab-at-nus-as-a-research-scholar",
          title: 'I have joined the Cognitive AI for Science Lab at NUS as a...',
          description: "",
          section: "News",},{id: "news-our-benchmark-for-fundamental-machine-learning-problems-fml-bench-for-ai-scientists-has-officially-launched",
          title: 'Our benchmark for fundamental machine learning problems (FML-bench) for AI scientists has officially...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E%68%78%32%32@%6D%61%69%6C%73.%74%73%69%6E%67%68%75%61.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=t90UCKEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
