var config = {
    style: 'mapbox://styles/slyw0246/cm0zlfgog00p501ntan5jdl4g',
    accessToken: 'pk.eyJ1Ijoic2x5dzAyNDYiLCJhIjoiY20wdjhvNGtvMWg1ZTJpcTVuc3E0NXp5YyJ9.WMIP4DPHgpFwrqKGTEf0FA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Stories on the Streets',
    subtitle: 'A Journey of Discovery - Public Art around the World!',
    byline: 'A Storymap by - Shirley, Violet, and Alona',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        // Entry 1: Introductory Text 1  
        { 
            id: 'Introduction_1',
            alignment: 'fully',
            hidden: false,
            title: 'Public Art - What is it?',
            image: 'Intro_Image1_MTL.jpg',
            description: 'Public art is characterized by its visual or physical accessibility in public space or a public realm. It can exist on privately owned property as well, though in this case general public access rights must exist. It is a site specific form of art, existing within specific local contexts it responds to and stands in conversation with, including the public it interacts with and engages. Historically, public art exists as a predominantly public institution of the state and governments furthered through public funding mechanisms. Increasing claims to public space held by civil rights movement’s in the 1960s and 1970s brought about revised ideas of public art practices and its purpose. There was a shift in the discourse from the national to the local level, and increasing views of art as social interventions in public space. <br><br>Public art is usually funded by either governments (both federal and local), public institutions, grants for private companies. Alternatively, more bottom-up and grassroots systems of financing public art projects that differ slightly from the approaches of direct commissioning also exist. Third spaces are increasingly valuable in cities today and public art is a common mechanism for these spaces to develop and form.<br><br>Especially in a time where many museums and galleries are ticketed, placing art out on the street or areas of high public visibility can make it accessible to a wider array of people. Artists can make use of the visibility their pieces receive in a variety of ways. Common examples of public art are cities using sculptures of people of the past to mark local history, artists using it to bring attention to the political issues close to their own hearts, or even something as simple as brightening the day of those who cross the art\’s path.',
            location: {
                center: [-73.5674, 45.5019],
                zoom: 1, // zoom level 1 for the entry point to story map 
                pitch: 60,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Entry 2: Introduction - Expenditure Table
        //International data on government spending on the ... (n.d.-b). https://www.arts.gov/sites/default/files/74.pdf 
        { 
            id: 'table',
            alignment: 'fully',
            hidden: false,
            title: 'Government Expenditure on the Arts and Museums',
            description: '<table><tr><th></th><th>Main Year of Financial Data</th><th>Per Capita Arts Spending (USD) </th><th>Government Arts Spending as Percentage of GDP</th><th>Population (millions)</th></tr><tr><td>Australia</td><td>1993/1994</td><td>$25</td><td>0.82%</td><td>17.7</td></tr><tr><td>Canada</td><td>1994/1995</td><td>$46</td><td>0.93%</td><td>27.4</td></tr><tr><td>Finland</td><td>1994</td><td>$91</td><td>2.10%</td><td>5.1</td></tr><tr><td>France</td><td>1993</td><td>$57</td><td>1.31%</td><td>57.7</td></tr><tr><td>Germany</td><td>1993</td><td>$85</td><td>1.79%</td><td>81.2</td></tr><tr><td>Ireland</td><td>1995</td><td>$9</td><td>0.43%</td><td>3.6</td></tr><tr><td>Netherlands</td><td>1994</td><td>$46</td><td>1.47%</td><td>15.4</td></tr><tr><td>Sweden</td><td>1993/1994</td><td>$57</td><td>1.02%</td><td>8.7</td></tr><tr><td>United Kingdom</td><td>1995/1996</td><td>$26</td> <td>0.65%</td><td>58.4</td></tr><tr><td>United States</td><td>1995</td><td>$6</td><td>0.13%</td><td>258.2</td></tr></table><br>(National Endowment for the Arts)',
            location: {
                center: [-73.5674, 45.5019],
                zoom: 1,
                pitch: 60,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        //Entry 3: Transition to examples 
        { 
            id: 'Intro_Transition',
            alignment: 'right',
            hidden: false,
            title: 'LET\'S SEE SOME EXAMPLES!', // \' for compatibility
            location: {
                center: [-73.5674, 45.5019],
                zoom: 1,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // 2. Chapters - Public Art Examples 

        // Chapter 1: Maman sculpture (Shirley)

        // Reference: 
        // Vanessa. (2024, April 15). Meet maman, the giant spider of Ottawa. Au-delà du Paysage. https://audeladupaysage.com/en/2015/01/28/meet-maman-the-giant-spider-of-ottawa/  
        // The maman statue in Ottawa, Canada. GPSmyCity. (n.d.). https://www.gpsmycity.com/attractions/the-maman-statue-8248.html 
        // Wikimedia Foundation. (2024, August 28). Maman (sculpture). Wikipedia. https://en.wikipedia.org/wiki/Maman_(sculpture)
        
        // Entry 1
        {
            id: 'maman-spider1',
            alignment: 'left',
            hidden: false,
            title: 'Maman by Louise Bourgeois in Ottawa',
            image: 'maman_spider.jpg',
            description: 'The artwork in Canada is a really famous tourist spot because of her size and her peculiar look. As the name suggests, the artist Louise Bourgeois made this sculpture in the memory of her mother. It may be unusual to use spider to represent a mother, but her mom was a weaver, Bourgeois wanted to show her mother’s strength and protectiveness by her artwork (Vanessa, 2024). <br> This is a 3.2 million dollar artwork that Canada purchased for the National Gallery 10 years ago. It seemed too expensive for some and it was criticized at the time, but quickly it became a great tourist attraction in Ottawa (Vanessa, 2024). ',
            location: {
                center: [-75.69727, 45.42935], // the exact location for Maman
                zoom: 12, // zoom close to the location to make the 3D building visible
                pitch: 50,
                bearing: -20 // give room for rotation
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 2: zoom closer to see the details of the 3D building next to the sculpture
        {
            id: 'maman-spider2',
            alignment: 'right',
            hidden: false,
            //title: 'Display Title',
            media: 'https://www.google.com/maps/embed?pb=!4v1726757645863!6m8!1m7!1stlSDyd-gJYTh94JIjby3EA!2m2!1d45.42950737128643!2d-75.69689967762567!3f240.4116800483239!4f5.126379534865833!5f2.299968626952992',
            description: 'The artwork Maman is actually located in six different places in the world. <ul><li>Tate Modern, UK</li> <li>National Gallery of Canada, Ottawa, Canada</li> <li>Guggenheim Museum Bilbao, Spain</li> <li>Mori Art Museum, Tokyo, Japan</li> <li>Crystal Bridges Museum of American Art, Bentonville, Arkansas, United States</li> <li>Kempen Museum of Contemporary Art, Kansas City, Missouri, United States</li><li>Qatar National Convention Center, Doha, Qatar</li></ul> (Wikimedia Foundation, 2024)',
            // same location as above
            location: {
                center: [-75.69727, 45.42935],
                zoom: 15, // zoom closer to location 
                pitch: 70, // high pitch to show 3D building
                bearing: -90 // facing straight to the art and building
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Chapter 2: Chapter of Wild Mouse - Sculpture (Violet)
        //Wild Mouse. Wild Mouse - Land of Fun (Brooklyn, New York, United States). (n.d.). https://rcdb.com/2165.htm 
        //Wild Mouse. Public Art Fund. (n.d.). https://www.publicartfund.org/exhibitions/view/wild-mouse/ 
        //David Finn projects. David Finn Projects. (n.d.). https://davidfinnprojects.weebly.com/ 
        {
            id: 'wildMouse',
            alignment: 'left',
            hidden: false,
            title: 'David Finn\'s Wild Mouse',
            image: 'wild.jpg',
            description: 'This art piece was a part of Finn\'s “Masked Figures” collection, where he collected trash and debris found nearby where he lived. This specific installation was beside the abandoned “Wild Mouse” ride in Coney Island, a traveling roller coaster that was shut down and abandoned sometime in the early 80s.  While most of the sculptures were on the street, many were installed in abandoned areas that still got a decent amount of foot traffic, like this sculpture being placed beside a non-operational roller coaster in a functioning amusement park.<br>(Roller Coaster DataBase, Public Art Fund and artist source)',
            location: {
                center: [-73.9707,40.5755],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Chapter 3: Jim Budish - Sculpture (Violet)
        //Make public art more public. Public Art Archive - Make Public Art More Public. (n.d.).  https://publicartarchive.org/art/Chauncey/c3df19a2 
        //Jim Budish | K newby gallery. (n.d.-c). https://newbygallery.com/artist/jim-budish 
        //Image: Huggins, A. (2022, October 7). 79. chauncey. Loveland High Plains Arts Council. https://www.sculptureinthepark.org/sculpture-collection/79-budish 
        {
            id: 'chauncey',
            alignment: 'right',
            hidden: false,
            title: 'Jim Budish\’s Chauncey',
            image: 'chauncey.jpg',
            description: 'This bronze sculpture of a rabbit can be found in the Benson sculpture gardens of Loveland, Colorado. Budish has created many public installations throughout his career. This isn\'t even the only Chauncey in the public sphere: a similar sculpture can be found in South Elgin, Illinois. Inspired by animals, he aims to capture their whimsical spirits with his sculptures and bring joy to those who see them. He mainly uses a lost-wax method, which involves creating a mold out of a clay and wax base and later pouring in molten metal. <br>(Public Art Archive and Newby Gallery)',
            location: {
                center: [-105.0927669,40.421792],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // Chapter 4: searching For Connection (Violet)
        // Entry 1
        // Image: El Anatsui, TSIATSIA – searching for connection, 2013. El Anatsui. (n.d.). https://elanatsui.art/artworks/tsiatsia-searching-for-connection 
        // Anatsui, E. (n.d.). 2013 El Anatsui in the courtyard. https://chronicle250.com/2013 
        // Biography. El Anatsui. (n.d.-a). https://elanatsui.art/biography 
        {
            id: 'searchingForConnection',
            alignment: 'left',
            hidden: false,
            title: 'El Anatsui\'s Searching for Connection',
            image: 'searching.jpg',
            description: 'El Anatsui makes abstract sculptural pieces inspired by tapestries. The overarching theme in his work is to bring attention to environmentalism, specifically in the context of colonization. The Ghanaian sculptor employs the flexibility and movement of his woven materials to comment on rapidly changing landscapes that this theme causes in both Ghana and Nigeria. Because of that, it is important to note that he first installed Searching for Connection at the Royal Art Academy in London. He created the sculpture with this location in mind, which means it affected the piece\’s final form. Despite being funded by a private institution, because it was installed on the outside of the museum, it counts as public art as it is consumed by the general public.<br>(Zeitz Museum of Contemporary Art Africa and artist source)',
            location: {
                center: [-0.14097, 51.509],
                zoom: 16,
                pitch: 60,
                bearing: -15
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 2
        // Anatsui, E. (n.d.). 2013 El Anatsui in the courtyard. https://chronicle250.com/2013 
        {
            id: 'searchingForConnection2',
            alignment: 'fully',
            hidden: false,
            title: 'The Artwork\'s Installation',
            media: 'searchingvid.mp4',
            description: '(Chronicle 250)',
            location: {
                center: [-0.14097, 51.509],
                zoom: 16,
                pitch: 60,
                bearing: -70
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
               
        },
        // Chapter 5: Children on bicycle: In between sculpture & mural (Shirley)

        // Reference:
        // Qua, M. R. (2019, July 3). Ernest Zacharevic, mural artist of “Children on bicycle”, responds to 262 坊 demolished incident. Penang Foodie. https://penangfoodie.com/ernest-zacharevic-mural-artist-of-children-on-bicycle-responds-to-262-%E5%9D%8A-demolished-incident/ 
        // Dose # 20 – Zacharevic’s little children on bicycle mural. DAILY DOSE OF ART. (2015, January 20). https://daily-dose-of-art.com/2015/01/20/dose-19-georgetowns-little-children-on-bicycle/ 
        
        // Entry 1
        {
            id: 'kids-bike1',
            alignment: 'fully',
            hidden: false,
            title: 'Children On Bicycle by Ernest Zacharevic',
            image: 'ChildrenBike.jpg',
            description: 'This interesting street art looks like regular mural art but is not that simple. <br> This artwork, located on Armenian Street in George Town, Malaysia, depicts a little girl taking a bike ride with her brother, they both look joyful and happy. If we look closely, we can see that the bike is not actually painted on the wall, it is a real bike protruding out. This quickly became a popular spot for both locals and tourists. Lots of people line up on the street just to get a picture of the street art. The art is now slowly wearing away by time (Qua, 2019).',
            location: {
                center: [100.33828, 5.41459],
                zoom: 10, // show general location
                pitch: 60,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 2: zoom closer to see the detail of the street
        {
            id: 'kids-bike2',
            alignment: 'left',
            hidden: false,
            //title: 'Children On Bicycle by Ernest Zacharevic',
            image: 'ChildrenBike2.jpg',
            description: 'In 2019, the building next to the Children on Bicycle artwork got demolished by the government due to the lack of a business permit. The artist Ernest Zacharevic came on social media to respond to this incident. He also stated that the artwork brings too much chaos to the original quiet street. He thought about painting over it but decided not to. He says it’s too late to make any change, people will always have something to line up for at that location (Qua, 2019). <br> This shows the power of art and how much influence it can have even if it’s fading away. People are also easily influenced by others, even if the artwork is barely visible or painted over by something else, they are influenced by social media to take a look at this tourist spot.',
            location: {
                center: [100.33828, 5.41459],
                zoom: 16, // zoom in to see the street it's located on
                pitch: 15, // overlook to shee the street
                bearing: 30
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Chapter 6: Berlin Wall - Public Art is Political (Shirley)
        
        // Reference:
        // Welling, J.,& Medeiros de Brito Pontes, C. (n.d.). An iconic moment: The socialist fraternal kiss. Chronik Der Mauer. https://www.chronik-der-mauer.de/en/sites/184090/an-iconic-moment-the-socialist-fraternal-kiss 
        // Walters, E. (2021, February 21). Satire, Erasure and deadly love: The story behind the berlin wall’s fraternal kiss. Medium. https://emilygracewalters.medium.com/satire-erasure-and-deadly-love-the-story-behind-the-berlin-walls-fraternal-kiss-6b832f949ac4 
        
        // Entry 1 
        {
            id: 'Berlin-wall1',
            alignment: 'right',
            hidden: false,
            title: 'My God, Help Me to Survive This Deadly Love by Dmitri Vrubel',
            image: 'BerlinWall.jpg',
            description: 'The red line we see on the map is the original location for the Berlin Wall, the data is updated in 1989 (Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen). This mural is located on a segment of the wall, which is called the East Side Gallery. <br> This mural is one of the most famous murals around the world. It originates from a black and white photo taken on the 30th anniversary of the Soviet leader Leonid Brezhnev and the East German leader Erich Honecker exchanging a socialist kiss (Walters, 2021). <br> The artist used many different methods to deliver his message and make his artwork stand out. For example, he drew the border of the mural white for it to stand out among the other artworks. He purposefully crossed the head of Honecker off the frame to show USSR’s dominance in the relationship (Walters, 2021). ',
            location: {
                center: [13.44288, 52.50396],
                zoom: 10, // general location, and smaller scale shows the original Berlin Wall location
                pitch: 50,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            speed: 5,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        // Entry 2: Zoom closer to see the location
        {
            id: 'Berlin-wall2',
            alignment: 'left',
            hidden: false,
            //title: 'My God, Help Me to Survive This Deadly Love',
            media: 'https://www.youtube.com/embed/CMR9WdvLVqg?si=TyXS0v-Uic45pcQR',
            description: 'The mural title is interesting as the public may think the two men are <b>deadly </b>in love. However, according to the artist Dmitri Vrubel, the title actually represents his own life concerns at the time, which was his realtionship with girls. This makes the title a little misleading. In an interview, the artist told journalist about the journey of getting a contract to paint on the Berlin Wall. His permit was sold by a scottish girl at the Berlin Wall, which is now the East Side Gallery (euronews, 2014), indicated by the purple line on the map.',
            location: {
                center: [13.44288, 52.50396],
                zoom: 14, //zoom in to see the location of the art on the east gallery wall
                pitch: 50,
                bearing: 130 // position at the start of the gallery, generally people start from the Northwest end of the gallery. 
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: true, // rotate the add interactiveness 
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        // Chapter 7: USA - Mexico Border Crossing (Alona) 
        // References 

        // @raelsanfrancisco. (2019, July 29). Teeter-totter Wall. Instagram.https://www.instagram.com/p/B0fY2R6hfKr/
        // Institute for Public Art. (n.d.). Teeter-totter wall. Institute for Public Art. https://www.instituteforpublicart.org/case-studies/teeter-totter-wall/#:~:text=A%20final%20note%20to%20put,dehumanized%20by%20this%20border%20wall.
        // Pearl, M. (2021, January 21). The Terrifying Cynicism of Teeter-Totter Wall. Art in America. https://www.artnews.com/art-in-america/columns/teeter-totter-wall-1234581905/
        // University of California, Berkeley. (n.d.). Ronald Rael. College of Environmental Design. https://ced.berkeley.edu/people/ronald-rael

        // Entry 1
        {
            id: 'eleventh-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Teeter-Totter Wall (2019), by Ronald Rael and Virginia San Fratello with Colectivo Chopeke',
            image: 'TTW_2.jpg',
            description: 'The Teeter-Totter Wall is a highly political interactive public art installation. On 28 July, 2019, three pink seesaws were installed in between the “18-foot-tall barrier of rustets slats” that constitutes the US-Mexico border between El Paso, Texas and Ciudad Juárez (Pearl, 2021). The installation was set up by Ronald Rael and Virginia San Fratello, together with Colectivo Chopeke, and was up for approximately 40 minutes. Recorded drone shots and images were shared in an instagram post, which quickly went viral. The art piece was named the winner of the 2021 International Award for Public Art (Institute for Public Art, n.d.). The post included in its caption that “children and adults were connected in meaningful ways on both sides with the recognition that the actions that take place on one side have a direct consequence on the other side” (@raelsanfrancisco, 2019).',
            location: {
                center: [-106.563622, 31.783916],
                zoom: 8,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 2: Zoom into boarder a bit more & link to instagram post 
        {
            id: 'twelfth-identifier',
            alignment: 'left',
            hidden: false,
            //embed instagram link here instead
            description: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B0fY2R6hfKr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B0fY2R6hfKr/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/B0fY2R6hfKr/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Ronald Rael (@rrael)</a></p></div></blockquote><script async src="//www.instagram.com/embed.js"></script>Ronald Rael is a Professor of Architecture and the Eva Li Memorial Chair in Architecture in the Department of Architecture in the College of Environmental Design at UC Berkely. He is the author of “Borderwall as Architecture: A Manifesto for the U.S. Mexico Boundary (University of California Press 2017)” (University of California, Berkeley, n.d.) , which includes an analysis of what the wall is and counterproposals for what it should be “including a wall of giant cacti and a wall whose slats are xylophone bars.” (Pearl, 2021). It the acceptance of the 2021 award Rael states: “ We never imagined that the humble event we created with communities on both sides of the border would be considered ‘public art’, although we always acknowledged that the border was ‘public space’ as it is a federally funded project paid for by taxpayers, and the public should decide what happens in the borderlands” (Institute for Public Art, n.d.).',
            location: {
                center: [-106.563622, 31.783916],
                zoom: 15, //adjusting zoom, adjusting pitch and bearing to have a more human-like-feel look up close
                pitch: 50,
                bearing: -120.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Chapter 8: Olafur Eliasson, Ice Watch (Alona)

        // Reference: 
        // Eliasson, O. (n.d.) Ice Watch Copenhagen. Olafur Eliasson. https://olafureliasson.net/icewatchcopenhagen/

        // Entry 1
        {
            id: 'fifth-chapter (1)',
            alignment: 'right',
            hidden: false,
            title: 'ICE WATCH (2014), Copenhagen, Denmark - An installation by Olafur Eliasson',
            image: 'icewatch_4.jpg', 
            description: '12 large blocks of ice that were broken off from the Greenland ice sheet were presented in clock formation at the City Hall Square in Copenhagen, Denmark from 26-29 October, 2024. The art installation marked the publication of the UN IPCC’s Fifth Assessment Report on Climate Change. Specific to just a moment in time, this ephemeral public art installation directly confronts the viewer with the temporality of the melting ice, calling for action against climate change and rising sea-levels. The remaining pieces of ice after the end of the 3-day installation, were donated to schools around Copenhagen (Eliasson, n.d.).',
            location: {
                center: [12.56925188162265, 55.67595654790346],
                zoom: 11,
                pitch: 30,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        // Entry 2: going over to origins of ice pieces in greenland 
        {
            id: 'seventh-chapter (3)',
            alignment: 'left',
            hidden: false,
            image: 'ICEWATCH_3.gif', 
            description: '“As an artist, I am interested in how we give knowledge a body. What does a thought feel like, and how can felt knowledge encourage action? Ice Watch makes the climate challenges we are facing tangible. I hope that people will touch the inland ice on City Hall Square and be touched by it. Perception and physical experience are cornerstones in art, and they may also function as tools for creating social change. We are all part of the “global we”; we must all work together to ensure a stable climate for future generations”, quote by Olafur Eliasson. <br> <br> Some interesting further readings as shared by the artist include: “Agency at the time of the Anthropocene” (2014) by Bruno Latour and “Hyperobjects” (2013), by Timothy Morton (Eliasson, n.d.).',
            location: {
                center: [-51.514102, 64.402002],
                zoom: 7,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 3: gif & zoom-in 
        {
            id: 'sixth-chapter (2)',
            alignment: 'right',
            hidden: false,
            title: 'Fishing Ice at Fjord Nuup Kangerlua, Greenland',
            image: 'ICEWATCH_2.gif', 
            description: 'Image credits attributed to Olafur Eliasson (Eliasson, n.d.)',
            location: {
                center: [-51.514102, 64.402002],
                zoom: 9,
                pitch: 50,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Chapter 9: Wheatfield by Agnes Denes (Alona)

        // References 
        //Denes, A. (n.d.). Works: Wheatfield – A Confrontation: Battery Park Landfill, Downtown Manhattan. Agnes Denes Studio. http://www.agnesdenesstudio.com/works7.html
        //Olsen, A. (12 June, 2024). Agnes Denes’s Iconic Wheat Field Is Sprouting at Art Basel. Here Are 3 Things You Should Know About It. Artnet. https://news.artnet.com/art-world-archives/agnes-denes-wheatfield-2497536

        // Entry 1
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Wheatfield - A Confrontation: Battery Park Landfill, Downtown Manhattan.',
            image: 'wheatfield_2.jpg',
            description: '“In May 1982, a 2-acre wheat field was planted on a landfill in lower Manhattan, two blocks from Wall Street and the World Trade Center, facing the Statue of Liberty” (Denes, n.d.) The installation comprised 200 truckloads of soil and 285 hand-furrowed rows planted with traditional wheat (Olsen, 2024). “The field was maintained for four months (...), the crop was harvested on August 16 and yielded over 1000 pounds of healthy, golden wheat”. This large-scale art installation displays an astonishing paradox not only conceptually but also visually and physically in space. It confronts the state of economic, political and social reality of society and raises questions about the values that underlie and drive these (Denes, n.d.).',
            location: {
                center: [-74.018213, 40.706271],
                zoom: 12,
                pitch: 8.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 2
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Site',
            image: 'wheatfield3_.jpg',
            description: 'The installation took place on the site of the Battery Landfill today, known today as “The Battery” or “The Battery Park”. The area had been used as a landfill, most notably for construction debris and garbage from the building of the nearby World Trade Center which was completed a decade earlier. The piece was commissioned by the Public Art Fund, part of the “The Urban Environmental Site Program” series that sought to draw attention to overlooked, abandoned, and empty spaces along New York’s waterfront (Olsen, 2024).',
            location: {
                center: [-74.018213, 40.706271],
                zoom: 15,
                pitch: 40,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // Entry 3: Final entry - centre
        {
            id: 'tenth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'From the Local to the Global',
            image: 'Wheatfield_1.jpg',
            description: 'While site-specific and local in definition, public art can reach across and beyond its spatial bounds, joining conversations taking place in many places at once, in other words - globally. In the example of Wheatfield - A confrontation; its global travel and distribution was both physical and conceptual as the grain that was harvested “traveled to 28 cities around the world in an exhibition called "The International Art Show for the End of World Hunger" (...) (1987-90).” Additionally, the seeds were distributed to visitors, who carried them away and “planted them in many parts of the globe” (Denes, n.d.).',
            location: {
                center: [-74.018213, 40.706271],
                zoom: 13,
                pitch: 20,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'thirteenth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'References',
            description: '@raelsanfrancisco. (2019, July 29). Teeter-totter Wall. Instagram. https://www.instagram.com/p/B0fY2R6hfKr/ <br> <br>Anatsui, E. (n.d.). 2013 El Anatsui in the courtyard. https://chronicle250.com/2013. <br> <br>Biography. El Anatsui. (n.d.-a). https://elanatsui.art/biography. <br> <br>Cape Town. (n.d.-a). https://zeitzmocaa.museum/wp-content/uploads/2019/02/Zeitz-MOCAA-El-Anatsui_TSIATSIA.pdf. <br> <br>David Finn projects. David Finn Projects. (n.d.). https://davidfinnprojects.weebly.com/. <br> <br>Denes, A. (n.d.). Works: Wheatfield – A Confrontation: Battery Park Landfill, Downtown Manhattan. Agnes Denes Studio. http://www.agnesdenesstudio.com/works7.html. <br> <br>Dose # 20 – Zacharevic’s little children on bicycle mural. DAILY DOSE OF ART. (2015, January 20). https://daily-dose-of-art.com/2015/01/20/dose-19-georgetowns-little-children-on-bicycle/. <br> <br>El Anatsui, TSIATSIA – searching for connection, 2013. El Anatsui. (n.d.-b). https://elanatsui.art/artworks/tsiatsia-searching-for-connection. <br> <br>Eliasson, O. (n.d.) Ice Watch Copenhagen. Olafur Eliasson. https://olafureliasson.net/icewatchcopenhagen/. <br> <br> euronews. (2014, Nov 6). Author of East Side Gallery\'s "Fraternity Kiss" 25 years on - le mag [video]. YouTube. https://youtu.be/CMR9WdvLVqg?si=TIWbwLJHi0SJ4oKl <br> <br>Huggins, A. (2022, October 7). 79. chauncey. Loveland High Plains Arts Council. https://www.sculptureinthepark.org/sculpture-collection/79-budish. <br> <br>Institute for Public Art. (n.d.). Teeter-totter wall. Institute for Public Art. https://www.instituteforpublicart.org/case-studies/teeter-totter-wall/#:~:text=A%20final%20note%20to%20put,dehumanized%20by%20this%20border%20wall.<br> <br>International data on government spending on the ... (n.d.-b). https://www.arts.gov/sites/default/files/74.pdf. <br> <br>Jim Budish | K newby gallery. (n.d.-c). https://newbygallery.com/artist/jim-budish. <br> <brMake public art more public. Public Art Archive - Make Public Art More Public. (n.d.). https://publicartarchive.org/art/Chauncey/c3df19a2. <br> <br>Olsen, A. (12 June, 2024). Agnes Denes’s Iconic Wheat Field Is Sprouting at Art Basel. Here Are 3 Things You Should Know About It. Artnet. https://news.artnet.com/art-world-archives/agnes-denes-wheatfield-2497536. <br> <br> Pearl, M. (2021, January 21). The Terrifying Cynicism of Teeter-Totter Wall. Art in America. https://www.artnews.com/art-in-america/columns/teeter-totter-wall-1234581905/. <br> <br>Qua, M. R. (2019, July 3). Ernest Zacharevic, mural artist of “Children on bicycle”, responds to 262 坊 demolished incident. Penang Foodie. https://penangfoodie.com/ernest-zacharevic-mural-artist-of-children-on-bicycle-responds-to-262-%E5%9D%8A-demolished-incident/. <br> <br>The maman statue, Ottawa. (n.d.). GPSmyCity. https://www.gpsmycity.com/attractions/the-maman-statue-8248.html. <br> <br>University of California, Berkeley. (n.d.). Ronald Rael. College of Environmental Design. https://ced.berkeley.edu/people/ronald-rael. <br> <br>Vanessa. (2024, April 15). Meet maman, the giant spider of Ottawa. Au-delà du Paysage. https://audeladupaysage.com/en/2015/01/28/meet-maman-the-giant-spider-of-ottawa/. <br> <br>Walters, E. (2021, February 21). Satire, Erasure and deadly love: The story behind the berlin wall’s fraternal kiss. Medium. https://emilygracewalters.medium.com/satire-erasure-and-deadly-love-the-story-behind-the-berlin-walls-fraternal-kiss-6b832f949ac4. <br> <br>Welling, J.,& Medeiros de Brito Pontes, C. (n.d.). An iconic moment: The socialist fraternal kiss. Chronik Der Mauer. https://www.chronik-der-mauer.de/en/sites/184090/an-iconic-moment-the-socialist-fraternal-kiss. <br> <br>Wikimedia Foundation. (2024, August 28). Maman (sculpture). Wikipedia. https://en.wikipedia.org/wiki/Maman_(sculpture). <br> <br>Wild Mouse. Public Art Fund. (n.d.). https://www.publicartfund.org/exhibitions/view/wild-mouse/. <br> <br> Wild Mouse. Wild Mouse - Land of Fun (Brooklyn, New York, United States). (n.d.). https://rcdb.com/2165.html.',
            location: {
                center: [-74.018213, 40.706271],
                zoom: 1,
                pitch: -100,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        
    ]
};
