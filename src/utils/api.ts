import axios from 'axios'
import { SearchAPIResponse } from './types';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: "50"
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const tempData = `{
    "kind": "youtube#searchListResponse",
    "nextPageToken": "CDIQAA",
    "regionCode": "DE",
    "pageInfo": {
        "totalResults": 519726,
        "resultsPerPage": 50
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A"
            },
            "snippet": {
                "publishedAt": "2018-12-25T10:37:24Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "JavaScript Mastery",
                "description": "Launch your development career with project-based coaching - showcase your skills with practical development experience and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-25T10:37:24Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "F627pKNUCVQ"
            },
            "snippet": {
                "publishedAt": "2022-11-11T11:26:54Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course",
                "description": "Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/F627pKNUCVQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/F627pKNUCVQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/F627pKNUCVQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-11T11:26:54Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "_oO4Qi5aVZs"
            },
            "snippet": {
                "publishedAt": "2022-08-12T10:04:33Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind",
                "description": "Master modern web development by building a responsive React JS application consisting of a stunning hero section, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_oO4Qi5aVZs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_oO4Qi5aVZs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_oO4Qi5aVZs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-12T10:04:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "ugCN_gynFYw"
            },
            "snippet": {
                "publishedAt": "2022-11-25T14:19:16Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Modern Next 13 Website With Framer Motion &amp; Tailwind CSS",
                "description": "Learn how to transform a Figma design into a fully functioning website using Next13, Framer Motion, and Tailwind CSS, build ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ugCN_gynFYw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ugCN_gynFYw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ugCN_gynFYw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-25T14:19:16Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#playlist",
                "playlistId": "PL6QREj8te1P6CkO_4OIK1-nwG5OxCD5tR"
            },
            "snippet": {
                "publishedAt": "2022-03-14T13:18:06Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build Modern UI/UX Websites",
                "description": "This playlist will teach you how to transform a Figma design into a fully functioning website, improve your CSS skills, and create ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LMagNcngvcU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LMagNcngvcU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LMagNcngvcU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-14T13:18:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "b9eMGE7QtTk"
            },
            "snippet": {
                "publishedAt": "2022-03-04T11:06:59Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "React JS Full Course 2022 | Build an App and Master React in 1 Hour",
                "description": "Are you wondering how to become a React developer? Look no further, and get all the info in one video. The first 1000 people to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-04T11:06:59Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#playlist",
                "playlistId": "PLXzwfq9BiakHtFiwDmSILkzazPzjPmpt4"
            },
            "snippet": {
                "publishedAt": "2020-08-02T09:46:56Z",
                "channelId": "UC-sJoyVs1fl30ExtwD_n9EQ",
                "title": "JavaScript Mastery",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/F627pKNUCVQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/F627pKNUCVQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/F627pKNUCVQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Mridul Panda",
                "liveBroadcastContent": "none",
                "publishTime": "2020-08-02T09:46:56Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "XxXyfkrP298"
            },
            "snippet": {
                "publishedAt": "2022-10-14T10:44:49Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Modern React Web Development Full Course - 12 Hours | 4 Real Industry Web Applications",
                "description": "Welcome to the ultimate course, which will help you become a master of Modern Web Development by Building Real Industry ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XxXyfkrP298/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XxXyfkrP298/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XxXyfkrP298/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-14T10:44:49Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "3HNyXCPDQ7Q"
            },
            "snippet": {
                "publishedAt": "2022-02-18T11:45:42Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2022",
                "description": "Do you know the best way to show your skills to employers or potential clients? Stand out from the crowd by presenting a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3HNyXCPDQ7Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3HNyXCPDQ7Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3HNyXCPDQ7Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-02-18T11:45:42Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "jx5hdo50a2M"
            },
            "snippet": {
                "publishedAt": "2022-05-20T10:01:37Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More",
                "description": "Every web developer needs to build a React Admin Dashboard Application. Learn how to create the best and most modern one ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/jx5hdo50a2M/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/jx5hdo50a2M/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/jx5hdo50a2M/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-05-20T10:01:37Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "LMagNcngvcU"
            },
            "snippet": {
                "publishedAt": "2021-11-12T12:33:51Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Fully Responsive Modern UI/UX Website in React JS",
                "description": "This video is perfect for you if you want to learn how to transform a Figma design into a fully functioning website, improve your ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LMagNcngvcU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LMagNcngvcU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LMagNcngvcU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-12T12:33:51Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "VsUzmlZfYNg"
            },
            "snippet": {
                "publishedAt": "2022-03-22T13:41:43Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Full Stack MERN Social Media App with Auth, Pagination, Comments | MERN Course",
                "description": "Watch this video to master the MERN stack and build real industry applications. FREE Ultimate MERN Guide: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/VsUzmlZfYNg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/VsUzmlZfYNg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/VsUzmlZfYNg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-03-22T13:41:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "I1cpb0tYV74"
            },
            "snippet": {
                "publishedAt": "2022-09-23T11:43:34Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Better Spotify 2.0 Clone Music App with React 18! (Tailwind, Redux, RapidAPI)",
                "description": "Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/I1cpb0tYV74/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/I1cpb0tYV74/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/I1cpb0tYV74/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-23T11:43:34Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "dyFVwXROzZk"
            },
            "snippet": {
                "publishedAt": "2023-01-06T11:02:51Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy 3 Modern React API Applications in 8 Hours - Full Course | RapidAPI",
                "description": "Welcome to the ultimate course, which will help you become a master of APIs by Building Real Industry Applications. In this ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/dyFVwXROzZk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/dyFVwXROzZk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/dyFVwXROzZk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-06T11:02:51Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "BDCT6TYLYdI"
            },
            "snippet": {
                "publishedAt": "2022-12-09T12:26:52Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Web3 Blockchain Crowdfunding Platform (Kickstarter)",
                "description": "With a stunning design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/BDCT6TYLYdI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/BDCT6TYLYdI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/BDCT6TYLYdI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-09T12:26:52Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "1RHDhtbqo94"
            },
            "snippet": {
                "publishedAt": "2021-12-21T10:34:02Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Modern Full Stack Social Media App | FULL COURSE",
                "description": "With all advanced Social Media features, such as Google Authentication, create, edit, delete and save posts, like and comment on ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1RHDhtbqo94/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1RHDhtbqo94/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1RHDhtbqo94/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-21T10:34:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "2FeymQoKvrk"
            },
            "snippet": {
                "publishedAt": "2022-12-23T10:50:23Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy Your Own ChatGPT AI App in JavaScript | OpenAI, Machine Learning",
                "description": "With an elegant user interface that resembles the ChatGPT app, communication with advanced GPT3 model API, and most ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2FeymQoKvrk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2FeymQoKvrk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2FeymQoKvrk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-23T10:50:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "FHTbsZEJspU"
            },
            "snippet": {
                "publishedAt": "2022-08-26T12:02:28Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI",
                "description": "Master modern web development by building a responsive React JS application consisting of stunning video sections, custom ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FHTbsZEJspU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FHTbsZEJspU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FHTbsZEJspU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-26T12:02:28Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "4mOkFXyxfsU"
            },
            "snippet": {
                "publishedAt": "2022-04-22T11:26:00Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Modern Full Stack ECommerce React Application with Stripe",
                "description": "Every web developer needs to know how to build an ECommerce website using React. Learn how to build the best and most ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4mOkFXyxfsU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4mOkFXyxfsU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4mOkFXyxfsU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-04-22T11:26:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "C9ctoK4M9Bk"
            },
            "snippet": {
                "publishedAt": "2022-10-28T10:00:12Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy an Online Multiplayer Web 3 NFT Card Game | Full Course",
                "description": "Web 3.0 has the power to change the internet as we know it forever. You're still early in catching the trend right now and building ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/C9ctoK4M9Bk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/C9ctoK4M9Bk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/C9ctoK4M9Bk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-28T10:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "g7T23Xzys-A"
            },
            "snippet": {
                "publishedAt": "2021-01-01T16:35:24Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "JavaScript Crash Course 2021 - Master JavaScript in One Video!",
                "description": "JavaScript is one of the most popular languages of 2021, it is easy to learn and it is extremely powerful. In this video, you will learn ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/g7T23Xzys-A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/g7T23Xzys-A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/g7T23Xzys-A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-01T16:35:24Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#playlist",
                "playlistId": "PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR"
            },
            "snippet": {
                "publishedAt": "2020-04-07T10:56:39Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Master React JS by Building Real Projects",
                "description": "Series of real-world projects that you can learn React with. Learn React hooks, React API data fetching, React Hooks, proper ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XxXyfkrP298/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XxXyfkrP298/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XxXyfkrP298/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2020-04-07T10:56:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "OPaLnMw2i_0"
            },
            "snippet": {
                "publishedAt": "2021-06-11T13:56:42Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy THE PERFECT Portfolio Website | Create a Portfolio from Scratch",
                "description": "Your portfolio is your resume and your business card. Learn how to build a responsive personal development portfolio from ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/OPaLnMw2i_0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/OPaLnMw2i_0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/OPaLnMw2i_0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-11T13:56:42Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "_ivIUCSOZ78"
            },
            "snippet": {
                "publishedAt": "2022-04-01T12:29:32Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy Your First Modern React Native App | NFT Marketplace Course - Extremely Easy!",
                "description": "Master React Native by building a modern NFT Marketplace iOS and Android #ReactNative Application in one video! Alongside ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_ivIUCSOZ78/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_ivIUCSOZ78/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_ivIUCSOZ78/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-04-01T12:29:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "KBpoBc98BwM"
            },
            "snippet": {
                "publishedAt": "2022-06-11T12:20:39Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Modern React 18 Fitness Exercises App With APIs | RapidAPI",
                "description": "Every web developer needs to know how to use APIs in their applications. Learn how to create the best and most modern Fitness ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/KBpoBc98BwM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/KBpoBc98BwM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/KBpoBc98BwM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-06-11T12:20:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "HYv55DhgTuA"
            },
            "snippet": {
                "publishedAt": "2021-11-05T11:11:36Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy THE BEST Modern Blog App with React | GraphQL, NextJS, Tailwind CSS",
                "description": "With featured and recent posts, categories. full markdown articles, author information, comments, and much more, this fully ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HYv55DhgTuA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HYv55DhgTuA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HYv55DhgTuA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-05T11:11:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "4oV65GVVits"
            },
            "snippet": {
                "publishedAt": "2022-01-28T11:08:30Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
                "description": "This video is perfect for you if you want to learn how to transform a #Figma design into a fully functioning website, improve your ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4oV65GVVits/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4oV65GVVits/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4oV65GVVits/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-01-28T11:08:30Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "CcBHZ0t2Qwc"
            },
            "snippet": {
                "publishedAt": "2022-07-02T16:32:12Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Full Stack TikTok Clone Application and Master TypeScript | Full Course (Part 1)",
                "description": "Every web developer needs to know how to build a Social Media Website. Learn to build the best and most modern one using ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CcBHZ0t2Qwc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CcBHZ0t2Qwc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CcBHZ0t2Qwc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-07-02T16:32:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#playlist",
                "playlistId": "PL6QREj8te1P7gixBDSU8JLvQndTEEX3c3"
            },
            "snippet": {
                "publishedAt": "2021-12-01T10:27:12Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Master Next JS by Building Real Projects",
                "description": "Series of real-world projects that you can learn Next.js with. Learn React, API data fetching, project file & file structure, server-side ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/OPaLnMw2i_0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/OPaLnMw2i_0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/OPaLnMw2i_0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-01T10:27:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "GDa8kZLNhJ4"
            },
            "snippet": {
                "publishedAt": "2022-01-14T11:01:09Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy 5 JavaScript &amp; React API Projects in 10 Hours - Full Course | RapidAPI",
                "description": "Welcome to the ultimate course, which will help you become a master of APIs by Building Real Industry Applications. In this ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GDa8kZLNhJ4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GDa8kZLNhJ4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GDa8kZLNhJ4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-01-14T11:01:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "a00NRSFgHsY"
            },
            "snippet": {
                "publishedAt": "2021-02-02T15:00:00Z",
                "channelId": "UC-T8W79DN6PBnzomelvqJYw",
                "title": "5 JavaScript Concepts You HAVE TO KNOW",
                "description": "How well do you know JavaScript? Well, if you don't know these 5 concepts, then you better get on it! 00:00 - Intro 01:00 - Equality ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/a00NRSFgHsY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/a00NRSFgHsY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/a00NRSFgHsY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "James Q Quick",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-02T15:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "xORdz1Hi9Gc"
            },
            "snippet": {
                "publishedAt": "2022-02-11T11:00:19Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Become a Full Stack Web Developer in 2022 | Practical Step by Step Frontend and Backend Guide",
                "description": "Are you wondering how to become a web developer? Look no further, and get all the info in one video. The first 1000 people to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/xORdz1Hi9Gc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xORdz1Hi9Gc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/xORdz1Hi9Gc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-02-11T11:00:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "chx9Rs41W6g"
            },
            "snippet": {
                "publishedAt": "2021-10-09T03:30:03Z",
                "channelId": "UCrkQMtWNtuq-1j0q8c2RVeQ",
                "title": "JavaScript |  Beginning to Mastery Complete Tutorial (Part 1)",
                "description": "Complete modern javascript/es6 tutorial in Hindi (2021) Source code ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/chx9Rs41W6g/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/chx9Rs41W6g/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/chx9Rs41W6g/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Harshit vashisth",
                "liveBroadcastContent": "none",
                "publishTime": "2021-10-09T03:30:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "Wn_Kb3MR_cU"
            },
            "snippet": {
                "publishedAt": "2021-12-28T11:21:14Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto",
                "description": "Web 3.0 has the potential to change the internet as we know it, forever. You're still early in catching the trend right now and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Wn_Kb3MR_cU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Wn_Kb3MR_cU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Wn_Kb3MR_cU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-28T11:21:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "xc3a_CJhjCc"
            },
            "snippet": {
                "publishedAt": "2022-11-29T02:43:06Z",
                "channelId": "UCyFWoLmPTgZ3BkHIKMRSV1g",
                "title": "JavaScript Mastery Complete Course | JavaScript Tutorial For Beginner to Advance",
                "description": "Course Level: Beginner This Specialization is intended for the learner with no previous programming experience or the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/xc3a_CJhjCc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Nerd's lesson",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-29T02:43:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "jcOKU9f86XE"
            },
            "snippet": {
                "publishedAt": "2021-01-29T12:05:32Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Chat Application using React JS - Build and Deploy a Chat App in 1 Hour (Microsoft Teams)",
                "description": "LEARN: Sockets, Rest APIs, Sending Images, React Hooks, Props, and CSS! This course breaks down everything you need to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/jcOKU9f86XE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/jcOKU9f86XE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/jcOKU9f86XE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-29T12:05:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "fNWxN0q-ZgE"
            },
            "snippet": {
                "publishedAt": "2022-05-06T10:55:23Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "15 Best VS Code Shortcuts to Boost Your Development Productivity (simple and incredibly efficient!)",
                "description": "Improve your VS Code workflow by using the tips and tricks and keyboard shortcuts you'll learn in this video. These shortcuts will ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fNWxN0q-ZgE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fNWxN0q-ZgE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fNWxN0q-ZgE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-05-06T10:55:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "be9sHQ7xqo0"
            },
            "snippet": {
                "publishedAt": "2021-07-09T10:07:09Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Turn an API into a Startup?! Build &amp; Sell an API with JavaScript",
                "description": "The only #Node JS API tutorial you need. Learn how to Build and Deploy your own fully custom #JavaScript #API with Node and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/be9sHQ7xqo0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/be9sHQ7xqo0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/be9sHQ7xqo0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-09T10:07:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "UKdQjQX1Pko"
            },
            "snippet": {
                "publishedAt": "2021-08-06T12:24:49Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Google Maps Travel Companion Application | React.js",
                "description": "Geolocation, Google Maps API & Google Places API, fetching API data based on the location, data filtering are just some features ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/UKdQjQX1Pko/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/UKdQjQX1Pko/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/UKdQjQX1Pko/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-06T12:24:49Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "9DDX3US3kss"
            },
            "snippet": {
                "publishedAt": "2021-09-18T15:54:52Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a React Cryptocurrency App and Master Redux Toolkit in One Video",
                "description": "Learn advanced React best practices, State Management using Redux Toolkit, UI Creation using Ant Design, creating charts ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9DDX3US3kss/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9DDX3US3kss/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9DDX3US3kss/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-18T15:54:52Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "ngc9gnGgUdA"
            },
            "snippet": {
                "publishedAt": "2020-10-30T16:46:58Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB [Part 1/2]",
                "description": "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Project - from start to finish. The App is ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ngc9gnGgUdA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ngc9gnGgUdA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ngc9gnGgUdA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2020-10-30T16:46:58Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "iGBERMGMIvc"
            },
            "snippet": {
                "publishedAt": "2021-04-30T12:59:39Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Premium Next JS React Website | Landing Page, Business Website, Portfolio",
                "description": "In this video, you're going to build and deploy a professional Next.js landing page! JS Mastery Pro ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iGBERMGMIvc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iGBERMGMIvc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iGBERMGMIvc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-30T12:59:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "l8WPWK9mS5M"
            },
            "snippet": {
                "publishedAt": "2020-07-12T18:41:31Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build a REST API with Node JS and Express | CRUD API Tutorial",
                "description": "In this video, you'll learn everything you need to know about creating a simple API using Node and Express. Join our ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/l8WPWK9mS5M/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/l8WPWK9mS5M/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/l8WPWK9mS5M/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2020-07-12T18:41:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "MJzbJQLGehs"
            },
            "snippet": {
                "publishedAt": "2021-08-30T11:15:00Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Full Stack Realtime Chat Messaging App with Authentication &amp; SMS Notifications",
                "description": "With Direct and Group Chats, emojis & Reactions, Built-in Gif support, the ability to edit & delete messages, specialized ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MJzbJQLGehs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MJzbJQLGehs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MJzbJQLGehs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-30T11:15:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "7x-qQ_187rM"
            },
            "snippet": {
                "publishedAt": "2022-07-09T13:57:33Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Full Stack Video-Sharing Social Media Application | Full Course (Part 2)",
                "description": "Every web developer needs to know how to build a Video-Sharing Social Media Website. Learn to build the best and most ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/7x-qQ_187rM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/7x-qQ_187rM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/7x-qQ_187rM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-07-09T13:57:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "Y89q6T1r1Yg"
            },
            "snippet": {
                "publishedAt": "2022-09-09T10:29:07Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy a Web 3.0 Cryptocurrency Exchange Decentralized Application",
                "description": "Master Web3 development by building Uniswap - a decentralized cryptocurrency exchange React application with metamask ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Y89q6T1r1Yg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Y89q6T1r1Yg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Y89q6T1r1Yg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2022-09-09T10:29:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "Xoz31I1FuiY"
            },
            "snippet": {
                "publishedAt": "2021-02-28T15:24:45Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Learn Material UI in One Hour - React Material UI Project Tutorial [2022]",
                "description": "Are you new to Material UI? Have you heard about it but never actually tried it out? Maybe you dived into it but it felt overwhelming ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Xoz31I1FuiY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Xoz31I1FuiY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Xoz31I1FuiY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-28T15:24:45Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "NDbruK1fzG8"
            },
            "snippet": {
                "publishedAt": "2021-10-19T11:00:26Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Build and Deploy Google Search 2.0 with React &amp; Tailwind CSS (simple!)",
                "description": "With the ability to search for up-to-date results, news, images, and videos, modern UI, dark mode, this completely responsive ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/NDbruK1fzG8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/NDbruK1fzG8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/NDbruK1fzG8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2021-10-19T11:00:26Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "Llsq1y-HWs4"
            },
            "snippet": {
                "publishedAt": "2021-10-18T15:39:58Z",
                "channelId": "UCrkQMtWNtuq-1j0q8c2RVeQ",
                "title": "JavaScript Beginning To Mastery Complete Tutorial (Part 2)",
                "description": "Complete Modern Javascript / es6 Course Part 2 Source Code ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Llsq1y-HWs4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Llsq1y-HWs4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Llsq1y-HWs4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Harshit vashisth",
                "liveBroadcastContent": "none",
                "publishTime": "2021-10-18T15:39:58Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "aibtHnbeuio"
            },
            "snippet": {
                "publishedAt": "2020-11-06T15:45:12Z",
                "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
                "title": "Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB [Part 2/2]",
                "description": "This video is the second part of a two-part series where you'll learn React, Node.js, Express & MongoDB. You'll also learn how to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aibtHnbeuio/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aibtHnbeuio/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aibtHnbeuio/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JavaScript Mastery",
                "liveBroadcastContent": "none",
                "publishTime": "2020-11-06T15:45:12Z"
            }
        }
    ]
}`


export const fetchFromAPI = async (url: string) => {

    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    // const data = JSON.parse(tempData);
    return data;
}