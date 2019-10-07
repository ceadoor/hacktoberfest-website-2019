module.exports = {
    navLinks: [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Details',
            url: '/details',
        },
        {
            name: 'FAQs',
            url: '/faqs',
        },
    ],

    registerButton: {
        name: 'Register Now',
        url: '/register',
        // name: 'Start Hacking',
        // url: '/progress',
    },

    /**
     *  HOME PAGE
     */

    heroText: 'Participate in event and earn a <span>limited edition T-shirt</span>!',
    heroDetails: {
        desc:
            'Hacktoberfest® is open to everyone in our global community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge.',
        ref: {
            text: 'Read more about',
            button: {
                text: 'the event here.',
                url: '/details',
            },
        },
        list: [
            'Hacktoberfest is open to everyone in our global community!',
            'Pull requests can be made in any GitHub-hosted repositories/projects.',
            'Sign up anytime between October 1 and October 31.',
        ],
    },
    heroRules: {
        desc:
            'To qualify for the official limited edition Hacktoberfest shirt, you must register and make four pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 40,000 participants whom successfully complete the challenge will earn a T-shirt.',
        ref: {
            text: 'Read more about',
            button: {
                text: 'event rules.',
                url: '/details',
            },
        },
    },
    heroProjects: {
        text: 'You can contribute to any project on GitHub. Here are a few available for you:',
    },
    homeSession: {
        text: 'Hacktoberfest is a month-long celebration of open source software.',
        session: [
            {
                id: '01',
                title: 'Intro',
                sub: 'The Prizes, Instructions & Introduction',
            },
            {
                id: '02',
                title: 'A Talk on Git',
                sub: 'Understanding How to Work with Git',
            },
            {
                id: '03',
                title: 'Dive into Coding',
                sub: 'Set-ups & Live Coding Session',
            },
            {
                id: '04',
                title: 'Hack Time',
                sub: 'Time for Pull-Requests',
            },
        ],
    },

    domain: 'https://hacktoberfest-tracecea.surge.sh/',
    repoLink: 'https://github.com/ceadoor/hacktoberfest-website-2019',
    twitterShare: 'https://bit.ly/2mt20Gi',
    githubLink: 'https://github.com/ceadoor',
    instagramLink: 'https://instagram.com/tracecea',
    slackLink: 'https://kutt.it/trace-slack',

    /**
     *  DETAILS PAGE
     */

    routeSession: {
        text: 'Celebrate and support open source technology by attending the local event.',
        session: [
            { id: '01', title: 'Whom', sub: 'Hacktoberfest is open to everyone in our global community.' },
            { id: '02', title: 'Where', sub: 'College of Engineering, Adoor' },
            {
                id: '03',
                title: 'How',
                sub: 'Make 4 pull requests to GitHub-hosted repositories.',
            },
            { id: '04', title: 'When', sub: '10th October 2019' },
        ],
    },

    prRequiredCount: 4,
};
