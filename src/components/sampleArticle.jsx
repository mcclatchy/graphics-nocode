import React, { Component, cloneElement } from "react";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Toolbar from "./Toolbar.jsx"
import WebComponent from "./webComponent.jsx"
import "./sampleArticle.css"


const SampleArticle = (props) => {
    const targetRef = React.createRef();

    // const useMutationObserver = (
    //   ref,
    //   callback,
    //   options = {
    //     attributes: true,
    //     characterData: true,
    //     childList: true,
    //     subtree: false,
    //   }
    // ) => {
    //   React.useEffect(() => {
    //     if (ref.current) {
    //       const observer = new MutationObserver(callback);
    //       observer.observe(ref.current, options);
    //       return () => observer.disconnect();
    //     }
    //   }, [callback, options]);
    // };
    // const mutationRef = React.useRef();
    // const [mutationCount, setMutationCount] = React.useState(0);
    // const incrementMutationCount = () => {
    //   if (mutationCount === 1) {
    //     console.log("here")
    //     return mutationCount
    //   }
    //   return setMutationCount(mutationCount + 1);
    // };
    // useMutationObserver(mutationRef, incrementMutationCount);

    const clearMovedWebComponent = (tag) => {
      const webComponent = document.querySelector(tag);
      webComponent && webComponent.remove();
    }

    let targetElement = targetRef && targetRef?.current;
    if (targetElement) {
      props.freeze ? disableBodyScroll(targetElement) : enableBodyScroll(targetElement);
    }

    const noInlineSizeNames = ['scrolling-map', 'inset-box']

    const nonBodyComponentNames = ["lead-image", "lead-logo", "lead-title", "lead-video"]
    const nonBodyWebComponents = props.webComponents.filter(webComponent => nonBodyComponentNames.includes(webComponent.props.name));
    const nonBodyToolbars = props.toolbars.filter(toolbar => nonBodyComponentNames.includes(toolbar.props.name))


    const bodyWebComponents = props.webComponents.filter(webComponent => !nonBodyComponentNames.includes(webComponent.props.name));
    const bodyToolbars = props.toolbars.filter(toolbar => !nonBodyComponentNames.includes(toolbar.props.name))

    window.pageInfo = {
      videoLead: 'false',
      'access.tags': '',
      'accuweather.apiKey': '2ce96fe9da724185a27db1e6a3ecf580',
      'accuweather.dev': 'false',
      'accuweather.locationKey': '347936',
      'accuweather.locationString': 'Raleigh',
      'accuweather.partnerCode': 'MCCLATCHY',
      'amp.connatixPlayerId': '955a69a1-e108-4c01-a10b-014a24812758',
      'classads.apartmentsUrl': 'http://www.apartments.com/NorthCarolina/Raleigh',
      'classads.carsUrl': 'http://www.cars.com/?aff=Raleigh',
      'classads.homefinderUrl': 'http://www.homefinder.com/NC/Raleigh',
      connatixPlayerId: '81fcc3f5-afe2-4cd3-8589-385c8820f46e',
      durationMedia: '1205',
      enableYozonsPrebid: 'true',
      'facebook.app.id': '133847067760',
      'financialContent.account': 'newsobserver',
      'findnsave.tracking': 'findnsave',
      'keywee.siteId': '752',
      'legacy.affiliateId': 'mi000150',
      'legacy.siteName': 'herald',
      'marketInfo.CarsAFF': 'herald',
      'marketInfo.CarsSEO': '',
      'marketInfo.JobsQSCTY': 'Raleigh',
      'marketInfo.JobsQSSTS': 'NC,US',
      'marketInfo.JobsSEO': '',
      'marketInfo.JobsSiteID': 'cbcb_mh',
      'marketInfo.Jobslr': 'CBCB_MH',
      'marketInfo.LiveConnectTag': 'a-01e9',
      'marketInfo.adretargeting.kill_list': '[&quot;simpli.fi&quot;]',
      'marketInfo.allow_ads': 'false',
      'marketInfo.allow_nativo': 'true',
      'marketInfo.careerbuilder.dmc_code': 'nc',
      'marketInfo.careerbuilder.dmc_id': '1048',
      'marketInfo.careerbuilder.lr': 'CBCB_MH',
      'marketInfo.careerbuilder.mxjobsrchcriteria_rawwords': 'outside+sales',
      'marketInfo.careerbuilder.s_freshness': '30',
      'marketInfo.careerbuilder.s_rawwords': 'CustomField3:RaleighTJ',
      'marketInfo.city': 'Raleigh',
      'marketInfo.classads.apartmentsUrl':
        'http://www.apartments.com/NorthCarolina/Raleigh',
      'marketInfo.clipped_taxonomy': 'News/World',
      'marketInfo.code': 'NC',
      'marketInfo.domain': 'newsobserver',
      'marketInfo.followLinks': '0',
      'marketInfo.kill_dealsaver': 'true',
      'marketInfo.klangooId': '351',
      'marketInfo.location': 'Raleigh',
      'marketInfo.logoAltText': 'News Observer',
      'marketInfo.market_identifier': 'NC.site_newsobserver',
      'marketInfo.name': 'News Observer',
      'marketInfo.networkid': '7675',
      'marketInfo.phone': '(803) 771-6161',
      'marketInfo.product': 'site',
      'marketInfo.pushlyDomainKey': 'i3Lbw22RAiab6gac8t22RNFH0j86Bu249wAU',
      'marketInfo.region': 'North Carolina',
      'marketInfo.shortURL': 'front',
      'marketInfo.siteId': '56',
      'marketInfo.sourcelevel': 'haiti',
      'marketInfo.state': 'North Carolina',
      'marketInfo.state_abbreviation': 'NC',
      'marketInfo.staticDirectory': 'newsobserver',
      'marketInfo.street_address': '701 Gervais Street, STE 150 PMB 117 Raleigh, NC 29201',
      'marketInfo.taxonomy': 'News/World///',
      'marketInfo.webmaster_email': 'webmaster@newsobserver.com',
      'nativo.story.placements': '840170,776813,844318',
      'nativo.video.placements': '869316,869315',
      'olive.localBrand': '',
      'publication.domain': 'newsobserver.com',
      'publication.mediadomain': 'media.newsobserver.com',
      'wishabi.bodyId': '861',
      'wishabi.navId': '1058',
      'wufoo.formID': '',
      'marketInfo.pagelevel': 'story',
      'marketInfo.viewsizes': [
        { 'Extra-Small': [0, 0] },
        { Large: [1200, 600] },
        { Medium: [992, 300] },
        { Small: [768, 300] },
      ],
      'marketInfo.adsizes': {
        outofpage: {},
        wallpaper: { '1600x600': [1600, 600], None: [] },
        floorboard: { '285x70': [285, 70], None: [] },
        default: {
          '120x20': [120, 20],
          '120x240': [120, 240],
          '120x600': [120, 600],
          '146x60': [146, 60],
          '160x600': [160, 600],
          '160x90': [160, 90],
          '168x28': [168, 28],
          '180x150': [180, 150],
          '216x36': [216, 36],
          '234x60': [234, 60],
          '240x400': [240, 400],
          '300x100': [300, 100],
          '300x250': [300, 250],
          '300x50': [300, 50],
          '300x600': [300, 600],
          '300x75': [300, 75],
          '320x450': [320, 450],
          '320x50': [320, 50],
          '336x280': [336, 280],
          '468x60': [468, 60],
          '500x300': [500, 300],
          '600x250': [600, 250],
          '728x90': [728, 90],
          '960x30': [960, 30],
          '970x90': [970, 90],
          'Billboard Flex': [
            [960, 30],
            [970, 90],
            [728, 90],
            [970, 250],
          ],
          'Billboard Flex2': [
            [970, 90],
            [970, 250],
          ],
          'Billboard Flex3': [
            [970, 90],
            [970, 250],
            [728, 90],
          ],
          'Flex Ad': [
            [300, 250],
            [300, 600],
          ],
          None: [],
          'Rising Star': [500, 300],
          'Welcome Ad': [
            [300, 250],
            [300, 600],
            [550, 480],
            [600, 500],
          ],
        },
      },
    };
  
  // TODO: going to be difficult to update this sample article with any regularity - hard to keep in sync
    
    return (
      <div ref={targetRef} key={`themes-${props.links.length}-enhancements-${props.scripts.length}`}>
        <meta charSet="utf-8" />
        {/* WPS Generated */}
        <link rel="dns-prefetch" href="https://securepubads.g.doubleclick.net/" />
        <link rel="dns-prefetch" href="https://static.doubleclick.net/" />
        <link rel="dns-prefetch" href="https://bidder.criteo.com/" />
        <link rel="dns-prefetch" href="https://static.criteo.net/" />
        <link rel="dns-prefetch" href="https://as-sec.casalemedia.com/" />
        <link rel="dns-prefetch" href="https://js-sec.indexww.com/" />
        <link rel="dns-prefetch" href="https://ib.adnxs.com/" />
        <link rel="dns-prefetch" href="https://hbopenbid.pubmatic.com/" />
        <link rel="dns-prefetch" href="https://fastlane.rubiconproject.com/" />
        <link rel="dns-prefetch" href="https://mcclatchy-d.openx.net/" />
        <link rel="dns-prefetch" href="https://tlx.3lift.com/" />
        <link rel="dns-prefetch" href="https://c.amazon-adsystem.com/" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="https://www.miamiherald.com/wps/build/images/miamiherald/windowsmetro-144.png" />
        <meta name="apple-itunes-app" content="app-id=366466705, affiliate-data=at=1010lHsN&ct=SmartAppBannerMIA, app-argument=https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article278457949.html?appNav=smartBanner" />
        <meta name="google-site-verification" content="CGBP3Njv1HyxLF1VInLHOprjcfJXffMVe5Udr0HQf-U" />
        <meta name="googlebot" content="noodp, noarchive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@miamiherald" />
        <meta name="twitter:title" content="Lionel Messi’s play has been ‘epic’ so far, his humility has been equally impressive | Opinion" />
        <meta property="og:site_name" content="Miami Herald" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Lionel Messi’s play has been ‘epic’ so far, his humility has been equally impressive | Opinion" />
        <meta property="og:url" content="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article278457949.html" />
        <meta property="og:description" content="Lionel Messi gave up the captain’s armband to ex-captain DeAndre Yedlin for the Leagues Cup trophy ceremony" />
        <meta name="twitter:description" content="Lionel Messi gave up the captain’s armband to ex-captain DeAndre Yedlin for the Leagues Cup trophy ceremony" />
        <meta property="og:image" content="https://www.miamiherald.com/latest-news/d54k7j/picture278420729/alternates/LANDSCAPE_1140/Inter_Miami_v_Nashville_MJO_31.jpg" />
        <meta name="og:image:alt" content="Inter Miami players celebrate with the Leagues Cup after defeating Nashville SC in the final match of the tournament at GEODIS Park on Saturday, Aug. 19, 2023, in Nashville, Tenn." />
        <meta name="twitter:image" content="https://www.miamiherald.com/latest-news/d54k7j/picture278420729/alternates/LANDSCAPE_1140/Inter_Miami_v_Nashville_MJO_31.jpg" />
        <meta name="twitter:image:alt" content="Inter Miami players celebrate with the Leagues Cup after defeating Nashville SC in the final match of the tournament at GEODIS Park on Saturday, Aug. 19, 2023, in Nashville, Tenn." />
        <meta property="fb:app_id" content={133847067760} />
        <meta name="title" content="Lionel Messi gives up captain armband for trophy ceremony | Miami Herald" />
        <meta name="allow-comments" content="true" />
        <meta name="description" content="Lionel Messi insisted that former Inter Miami captain DeAndre Yedlin wear the captain’s armband for the Leagues Cup trophy ceremony" />
        <meta name="keywords" content="Lionel Messi, Inter Miami, Leagues Cup, DeAndre Yedlin, armband, Jorge Mas" />
        <meta name="news_keywords" content="Lionel Messi, Inter Miami, Leagues Cup, DeAndre Yedlin, armband, Jorge Mas" />
        <link rel="canonical" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article278457949.html" />
        <meta name="original-source" content="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article278457949.html" />
        <meta name="is-wirestory" content="false" />
        <title>Lionel Messi gives up captain armband for trophy ceremony | Miami Herald</title>
        <link rel="amphtml" href="https://amp.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article278457949.html" />
        <meta property="article:opinion" content="true" />
        <meta property="fb:pages" content={38925837299} />
        <meta property="fb:pages" content={1340134982725916} />
        <meta property="fb:pages" content={548924038612223} />
        <meta property="fb:pages" content={15440589699} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
        {/*<link href="https://www.miamiherald.com/wps/build/webpack/css/mi-styles.bbd6bf7de7c700db9476.css" rel="stylesheet" type="text/css" />*/}
        <link href="https://cds.connatix.com/p/319203/player.css" rel="stylesheet" type="text/css" />
        <link href="https://assets.connatix.com/Elements/b7b148f8-e199-4447-8167-58d897dd5768/wps-custom-css.css" rel="stylesheet" type="text/css" />
        <link href="https://cds.connatix.com/p/319203/connatix.playspace.css" rel="stylesheet" type="text/css" />
        <link href="https://assets.connatix.com/Playspace/8b9058a0-7504-46aa-b707-0de95a2df186/McClatchy_Custom_Styling_Master.css" rel="stylesheet" type="text/css" />
        <link rel="apple-touch-icon" href="https://www.miamiherald.com/wps/build/images/miamiherald/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://www.miamiherald.com/wps/build/images/miamiherald/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.miamiherald.com/wps/build/images/miamiherald/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="https://www.miamiherald.com/wps/build/images/miamiherald/touch-icon-ipad-retina.png" />
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="https://www.miamiherald.com/wps/build/images/miamiherald/favicon-16.png" />
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="https://www.miamiherald.com/wps/build/images/miamiherald/favicon-32.png" />
        <link rel="shortcut icon" type="image/png" sizes="96x96" href="https://www.miamiherald.com/wps/build/images/miamiherald/favicon-96.png" />
        <link rel="shortcut icon" type="image/png" sizes="196x196" href="https://www.miamiherald.com/wps/build/images/miamiherald/favicon-196.png" />
        <link href="https://mcclatchy-next-apps-prod.s3.amazonaws.com/custom-css/all/style.css" rel="stylesheet" type="text/css" />
        <meta name="parsely-metadata" content="{&quot;article_id&quot;: &quot;278457949&quot;}" />


<div id="main-mastheadVueContainer" className="newMastheadContainer" data-v-app="">
    <header id="mastheadVueContainer" className="updated-flag">
        <div className="paper masthead" role="banner">
            <div className="flag">
                <div className="flag-row flag-top">
                    <div className="flag-eedition h-phone"><a href="https://www.miamiherald.com/e-edition/today" aria-label="eEdition"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                <path d="M5.25 1.5C4.83437 1.5 4.5 1.83438 4.5 2.25V11.75C4.5 12.0125 4.45625 12.2656 4.37187 12.5H13.75C14.1656 12.5 14.5 12.1656 14.5 11.75V2.25C14.5 1.83438 14.1656 1.5 13.75 1.5H5.25ZM2.25 14C1.00625 14 0 12.9937 0 11.75V2.5C0 2.08437 0.334375 1.75 0.75 1.75C1.16562 1.75 1.5 2.08437 1.5 2.5V11.75C1.5 12.1656 1.83438 12.5 2.25 12.5C2.66563 12.5 3 12.1656 3 11.75V2.25C3 1.00625 4.00625 0 5.25 0H13.75C14.9937 0 16 1.00625 16 2.25V11.75C16 12.9937 14.9937 14 13.75 14H2.25ZM5.5 3.25C5.5 2.83437 5.83437 2.5 6.25 2.5H9.25C9.66562 2.5 10 2.83437 10 3.25V5.75C10 6.16563 9.66562 6.5 9.25 6.5H6.25C5.83437 6.5 5.5 6.16563 5.5 5.75V3.25ZM11.75 2.5H12.75C13.1656 2.5 13.5 2.83437 13.5 3.25C13.5 3.66563 13.1656 4 12.75 4H11.75C11.3344 4 11 3.66563 11 3.25C11 2.83437 11.3344 2.5 11.75 2.5ZM11.75 5H12.75C13.1656 5 13.5 5.33437 13.5 5.75C13.5 6.16563 13.1656 6.5 12.75 6.5H11.75C11.3344 6.5 11 6.16563 11 5.75C11 5.33437 11.3344 5 11.75 5ZM6.25 7.5H12.75C13.1656 7.5 13.5 7.83437 13.5 8.25C13.5 8.66562 13.1656 9 12.75 9H6.25C5.83437 9 5.5 8.66562 5.5 8.25C5.5 7.83437 5.83437 7.5 6.25 7.5ZM6.25 10H12.75C13.1656 10 13.5 10.3344 13.5 10.75C13.5 11.1656 13.1656 11.5 12.75 11.5H6.25C5.83437 11.5 5.5 11.1656 5.5 10.75C5.5 10.3344 5.83437 10 6.25 10Z"></path>
                            </svg> Read today's Edition</a></div>
                    <div className="flag-logo">
                      <a href="https://www.miamiherald.com" aria-lab-el="Miami Herald" className="flag-logo">
                        <img className="logo msb-hide" src="https://www.miamiherald.com/wps/build/images/newLogos/miamiherald/logo.svg" alt="miamiherald Logo"/>
                        <img className="logo msb-show" src="https://www.miamiherald.com/wps/build/images/newLogos/miamiherald/logo-white.svg" alt="miamiherald Logo"/>
                      </a>
                    </div>
                    <div className="flag-account">
                        <div className="msb-show"><button className="button expander msb-show"><svg width="17" height="19" viewBox="0 0 17 19" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5972 7.41211C10.7942 8.21509 9.70584 8.66577 8.57034 8.66577C7.43557 8.66431 6.34719 8.21289 5.54495 7.41064C4.74197 6.60791 4.29055 5.52014 4.28909 4.38464C4.28982 3.24988 4.74051 2.16077 5.54348 1.35779C6.34646 0.55481 7.43484 0.104126 8.57034 0.104126C9.70559 0.104126 10.7942 0.55481 11.5972 1.35779C12.3999 2.16077 12.8506 3.24976 12.8506 4.38525C12.8506 5.52002 12.3999 6.60913 11.5972 7.41211ZM16.9373 18.1038H0.893825H0.203396C0.197781 15.8833 1.0801 13.7537 2.65432 12.1879C4.2239 10.6193 6.35134 9.73755 8.57034 9.73755C10.7893 9.73755 12.9178 10.6193 14.4864 12.1879C16.0557 13.7572 16.9373 15.8848 16.9373 18.1038Z"></path>
                                </svg></button>
                            <div id="popout" className="popout paper sans">
                                <div className="user"><svg viewBox="0 0 496 512">
                                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                    </svg><b>Welcome Back!</b></div><a href="https://myaccount.miamiherald.com/RAL_NO/myprofile"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 640 512" xml:space="preserve">
                                        <path className="st0" d="M144,128c0-44.2,35.8-80,80-80s80,35.8,80,80s-35.8,80-80,80S144,172.2,144,128z M352,128  C352,57.3,294.7,0,224,0S96,57.3,96,128s57.3,128,128,128S352,198.7,352,128z M49.3,464c8.9-63.3,63.3-112,129-112h91.4  c34.9,0,66.5,13.7,89.9,36l33.9-33.9c-32.1-31-75.7-50.1-123.9-50.1h-91.3C79.8,304,0,383.8,0,482.3C0,498.7,13.3,512,29.7,512  h293.1c-3.1-8.8-3.7-18.4-1.4-27.8l5.1-20.2H49.3z M613.8,235.7c-15.6-15.6-40.9-15.6-56.6,0l-29.4,29.4l71,71l29.4-29.4  c15.6-15.6,15.6-40.9,0-56.6L613.8,235.7L613.8,235.7z M375.9,417c-4.1,4.1-7,9.2-8.4,14.9l-15,60.1c-1.4,5.5,0.2,11.2,4.2,15.2  s9.7,5.6,15.2,4.2l60.1-15c5.6-1.4,10.8-4.3,14.9-8.4l129.2-129.3l-71-71L375.9,417z"></path>
                                    </svg> Edit Profile</a><a href="https://myaccount.miamiherald.com/RAL_NO/dashboard"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 640 512" xml:space="preserve">
                                        <path className="st0" d="M64,464h284.5c12.3,18.8,28,35.1,46.3,48H64c-35.3,0-64-28.7-64-64V224c0-35.3,28.7-64,64-64h384  c23.8,0,44.5,12.9,55.5,32.2c-2.5-0.1-5-0.2-7.5-0.2c-26.2,0-51.1,5.7-73.4,16H64c-8.8,0-16,7.2-16,16v224C48,456.8,55.2,464,64,464  z M440,80c13.3,0,24,10.7,24,24s-10.7,24-24,24H72c-13.3,0-24-10.7-24-24s10.7-24,24-24H440z M392,0c13.3,0,24,10.7,24,24  s-10.7,24-24,24H120c-13.3,0-24-10.7-24-24s10.7-24,24-24H392z M352,368c0-79.5,64.5-144,144-144s144,64.5,144,144  s-64.5,144-144,144S352,447.5,352,368z M573.7,448.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21,0-38.9,13.7-45.1,32.7  c20.2,19.4,47.5,31.3,77.7,31.3S553.5,468.1,573.7,448.7z M544,336c0-26.5-21.5-48-48-48c-26.5,0-48,21.5-48,48s21.5,48,48,48  C522.5,384,544,362.5,544,336z"></path>
                                    </svg> My Subscriptions</a><a><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                        <path className="st0" d="M505,273c9.4-9.4,9.4-24.6,0-33.9L377,111c-9.4-9.4-24.6-9.4-33.9,0s-9.4,24.6,0,33.9l87,87L184,232  c-13.3,0-24,10.7-24,24c0,13.3,10.7,24,24,24h246.1l-87,87c-9.4,9.4-9.4,24.6,0,33.9s24.6,9.4,33.9,0L505,273z M168,80  c13.3,0,24-10.7,24-24s-10.7-24-24-24H88C39.4,32,0,71.4,0,120v272c0,48.6,39.4,88,88,88h80c13.3,0,24-10.7,24-24s-10.7-24-24-24H88  c-22.1,0-40-17.9-40-40V120c0-22.1,17.9-40,40-40H168z"></path>
                                    </svg> Sign Out</a>
                                
                            </div>
                        </div>
                        <div class="msb-hide">
                          <a id="logIn" style={{cursor: "pointer"}}>Log In</a>
                          <span class="pipe-seperator">|</span>
                          <a href="https://subscribe.miamiherald.com/beinformed" className="subscribe-link">Subscribe</a>
                        </div>
                    </div>
                </div>
                <div className="flag-line"></div>
                <div className="flag-row flag-bottom">
                    <div className="flag-menu" role="menu">
                        <button aria-haspopup="true" className="button new-menu-toggle" id="menu-toggle" aria-expanded="false" role="menuitem"><svg className="icon-menu-toggle" xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.691406H11.2504V2.8904H0V0.691406ZM0 6.84766H8.65417V9.04665H0V6.84766ZM12.1158 13.0059H0V15.2049H12.1158V13.0059Z"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2734 9.83408C24.796 8.92389 25.0954 7.86513 25.0954 6.7353C25.0954 3.33479 22.3832 0.578125 19.0375 0.578125C15.6918 0.578125 12.9796 3.33479 12.9796 6.7353C12.9796 10.1358 15.6918 12.8925 19.0375 12.8925C20.3318 12.8925 21.5313 12.4799 22.5156 11.7771L25.8715 15.188C26.2588 15.5816 26.8868 15.5816 27.2742 15.188L27.7073 14.7477C28.0947 14.354 28.0947 13.7157 27.7073 13.322L24.3139 9.87299C24.3007 9.85956 24.2872 9.84659 24.2734 9.83408ZM19.0375 10.4296C17.0301 10.4296 15.4027 8.77561 15.4027 6.7353C15.4027 4.69499 17.0301 3.041 19.0375 3.041C21.0449 3.041 22.6722 4.69499 22.6722 6.7353C22.6722 8.77561 21.0449 10.4296 19.0375 10.4296Z"></path>
                            </svg></button></div>
                    <div className="flag-weather stack h-phone">
                        <div className="row"><a href="/weather" aria-label="Weather" role="menuitem"><span>59°F</span></a></div>
                    </div>
                    <div className="flag-nav slider h-phone">
                        <div className="row">
                            <div><a href="https://www.miamiherald.com/news/local#navlink=navbar">Local News</a></div>
                            <div><a href="https://www.miamiherald.com/news/business#navlink=navbar">Business</a></div>
                            <div><a href="https://liveedition.miamiherald.com/">Triangle Now</a></div>
                            <div><a href="https://www.miamiherald.com/news/politics-government#navlink=navbar">Politics</a></div>
                            <div><a href="https://www.miamiherald.com/sports#navlink=navbar">Sports</a></div>
                            <div><a href="https://www.miamiherald.com/living#navlink=navbar">Living</a></div>
                            <div><a href="https://jobs.miamiherald.com/">Jobs/Recruiting</a></div>
                            <div><a href="https://www.miamiherald.com/betting">Betting</a></div>
                            <div><a href="https://www.legacy.com/us/obituaries/miamiherald/browse">Obituaries</a></div>
                            <div><a href="https://www.miamiherald.com/shopping#navlink=navbar">Shopping</a></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-nav sans summary" id="main-nav" role="menu">
                <div id="nav-menu-search-icon" className="search flex" role="menuitem" tabIndex="0">
                    <form tabIndex="-1" action="/search/" className="flex" role="search" method="POST"><input id="nav-menu-search-bar" type="text" name="q" placeholder="Search" aria-label="Search Miami Herald" tabIndex="0"/><button type="submit" aria-label="Search" tabIndex="-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg></button></form>
                </div>
                <a className="" href="https://www.miamiherald.com/#navlink=subnav" role="menuitem" tabIndex="0">Home
                    
                    </a>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-1" id="menubtn-1" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Customer Service</button>
                    <div id="menu-1" aria-labelledby="menubtn-1" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/customer-service/about-us#navlink=subnav" role="menuitem" tabIndex="0">About Us</a></div>
                        <div role="none"><a href="https://account.miamiherald.com/my-account/" role="menuitem" tabIndex="0">Account Management</a></div>
                        <div role="none"><a href="https://miamiherald.newspapers.com/" role="menuitem" tabIndex="0">Archives</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/customer-service/contact-us#navlink=subnav" role="menuitem" tabIndex="0">Contact Us</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/customer-service#navlink=subnav" role="menuitem" tabIndex="0">Customer Service</a></div>
                        <div role="none"><a href="https://subscribe.miamiherald.com/beinformed" role="menuitem" tabIndex="0">Subscribe</a></div>
                        <div role="none"><a href="https://myaccount.miamiherald.com/ral_no/home" role="menuitem" tabIndex="0">Manage Print Subscription</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/customer-service/faq#navlink=subnav" role="menuitem" tabIndex="0">FAQ</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/customer-service/sponsorships#navlink=subnav" role="menuitem" tabIndex="0">Sponsorship</a></div>
                        <div role="none"><span className="option-label" tabIndex="-1">Advertise</span></div>
                        <div role="none"><a href="https://go.mcclatchy.com/media-capabilities-raleigh/p/1" role="menuitem" tabIndex="0">Contact McClatchy Advertising</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-2" id="menubtn-2" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Stay Connected</button>
                    <div id="menu-2" aria-labelledby="menubtn-2" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/mobile#navlink=subnav" role="menuitem" tabIndex="0">Mobile &amp; Apps</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/newsletters#navlink=subnav" role="menuitem" tabIndex="0">Newsletters</a></div>
                        <div role="none"><span className="option-label" tabIndex="-1">Advertise</span></div>
                        <div role="none"><a href="https://www.facebook.com/newsandobserver/" role="menuitem" tabIndex="0">Facebook</a></div>
                        <div role="none"><a href="https://twitter.com/miamiherald/" role="menuitem" tabIndex="0">Twitter</a></div>
                        <div role="none"><a href="http://instagram.com/miamiherald/" role="menuitem" tabIndex="0">Instagram</a></div>
                        <div role="none"><a href="https://www.youtube.com/c/TheMiamiHerald" role="menuitem" tabIndex="0">YouTube</a></div>
                    </div>
                </div><a className="" href="https://www.miamiherald.com/e-edition/today#navlink=subnav" role="menuitem" tabIndex="0">Read today's Edition
                    
                    </a><a className="" href="https://www.votedraleighsbest.com/" role="menuitem" tabIndex="0">Raleigh's Best
                    
                    </a>
                <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex="-1"/><a className="" href="https://www.miamiherald.com/detour#navlink=subnav" role="menuitem" tabIndex="0">Detour Travel
                    
                    </a>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-7" id="menubtn-7" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">News</button>
                    <div id="menu-7" aria-labelledby="menubtn-7" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/news/local#navlink=subnav" role="menuitem" tabIndex="0">Local</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/local/crime#navlink=subnav" role="menuitem" tabIndex="0">Crime</a></div>
                        <div role="none"><span className="option-label" tabIndex="-1">Counties</span></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/local/counties/durham-county#navlink=subnav" role="menuitem" tabIndex="0">Durham County</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/local/counties/johnston-county#navlink=subnav" role="menuitem" tabIndex="0">Johnston County</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/local/counties/orange-county#navlink=subnav" role="menuitem" tabIndex="0">Orange County</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/local/counties/wake-county#navlink=subnav" role="menuitem" tabIndex="0">Wake County</a></div>
                        <div role="none"><span className="option-label" tabIndex="-1">More News</span></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/local/education#navlink=subnav" role="menuitem" tabIndex="0">Education</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/weather-news#navlink=subnav" role="menuitem" tabIndex="0">Weather News</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/traffic#navlink=subnav" role="menuitem" tabIndex="0">Transportation</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/state/north-carolina#navlink=subnav" role="menuitem" tabIndex="0">North Carolina</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/nation-world/national#navlink=subnav" role="menuitem" tabIndex="0">National</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/databases#navlink=subnav" role="menuitem" tabIndex="0">Databases</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-8" id="menubtn-8" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Sports</button>
                    <div id="menu-8" aria-labelledby="menubtn-8" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/sports#navlink=subnav" role="menuitem" tabIndex="0">All Sports</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/nhl/carolina-hurricanes#navlink=subnav" role="menuitem" tabIndex="0">Canes</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/high-school#navlink=subnav" role="menuitem" tabIndex="0">High Schools</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/nascar-auto-racing#navlink=subnav" role="menuitem" tabIndex="0">NASCAR &amp; Auto Racing</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/nfl/carolina-panthers#navlink=subnav" role="menuitem" tabIndex="0">Panthers</a></div>
                        <div role="none"><span className="option-label" tabIndex="-1">Colleges</span></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/college/acc/duke#navlink=subnav" role="menuitem" tabIndex="0">Duke</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/college/acc/nc-state#navlink=subnav" role="menuitem" tabIndex="0">NC State</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/college/acc/unc#navlink=subnav" role="menuitem" tabIndex="0">North Carolina</a></div>
                        <div role="none"><span className="option-label" tabIndex="-1">Columnists</span></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/spt-columns-blogs/luke-decock#navlink=subnav" role="menuitem" tabIndex="0">Luke DeCock</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/sports/spt-columns-blogs/scott-fowler#navlink=subnav" role="menuitem" tabIndex="0">Scott Fowler</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-9" id="menubtn-9" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Politics</button>
                    <div id="menu-9" aria-labelledby="menubtn-9" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/news/politics-government#navlink=subnav" role="menuitem" tabIndex="0">Politics &amp; Government</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/politics-government/election#navlink=subnav" role="menuitem" tabIndex="0">Election</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-10" id="menubtn-10" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Business &amp; Real Estate</button>
                    <div id="menu-10" aria-labelledby="menubtn-10" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/business#navlink=subnav" role="menuitem" tabIndex="0">All Business</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/news/business/real-estate-news#navlink=subnav" role="menuitem" tabIndex="0">Real Estate</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/money#navlink=subnav" role="menuitem" tabIndex="0">Personal Finance</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-11" id="menubtn-11" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Living &amp; Entertainment</button>
                    <div id="menu-11" aria-labelledby="menubtn-11" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/living#navlink=subnav" role="menuitem" tabIndex="0">Living</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/entertainment#navlink=subnav" role="menuitem" tabIndex="0">Entertainment</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/living/food-drink#navlink=subnav" role="menuitem" tabIndex="0">Food + Drink</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/entertainment/comics#navlink=subnav" role="menuitem" tabIndex="0">Comics</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/entertainment/horoscopes#navlink=subnav" role="menuitem" tabIndex="0">Horoscopes</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/entertainment/games-puzzles#navlink=subnav" role="menuitem" tabIndex="0">Puzzles &amp; Games</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/entertainment/tv/warm-tv-blog#navlink=subnav" role="menuitem" tabIndex="0">Happiness is a Warm TV</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-12" id="menubtn-12" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Opinion</button>
                    <div id="menu-12" aria-labelledby="menubtn-12" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/opinion#navlink=subnav" role="menuitem" tabIndex="0">All Opinion</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/opinion/editorials#navlink=subnav" role="menuitem" tabIndex="0">Editorials</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/opinion/letters-to-the-editor#navlink=subnav" role="menuitem" tabIndex="0">Letters to the Editor</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/opinion/letters-to-the-editor/submit-letter#navlink=subnav" role="menuitem" tabIndex="0">Submit a Letter</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/opinion/letters-to-the-editor/submit-op-ed#navlink=subnav" role="menuitem" tabIndex="0">Submit an Op-ed</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-13" id="menubtn-13" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Obituaries</button>
                    <div id="menu-13" aria-labelledby="menubtn-13" role="menu">
                        <div role="none"><a href="https://www.legacy.com/obituaries/miamiherald/" role="menuitem" tabIndex="0">View Obituaries</a></div>
                        <div role="none"><a href="https://miamiherald.obituaries.com" role="menuitem" tabIndex="0">Place an Obituary</a></div>
                    </div>
                </div>
                <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex="-1"/>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-15" id="menubtn-15" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Sports Betting</button>
                    <div id="menu-15" aria-labelledby="menubtn-15" role="menu">
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276264976.html" role="menuitem" tabIndex="0">North Carolina Sports Betting</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276265821.html" role="menuitem" tabIndex="0">North Carolina Betting Apps</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276268846.html" role="menuitem" tabIndex="0">North Carolina Sportsbook Promo Code</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276267541.html" role="menuitem" tabIndex="0">BetMGM North Carolina Bonus Code</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276267666.html" role="menuitem" tabIndex="0">Caesars North Carolina Promo Code</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article283805073.html" role="menuitem" tabIndex="0">ESPN BET North Carolina Promo Code</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article284174123.html" role="menuitem" tabIndex="0">Fanatics Sportsbook North Carolina Promo</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article284067068.html" role="menuitem" tabIndex="0">Bet365 North Carolina Bonus Code</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276272471.html" role="menuitem" tabIndex="0">FanDuel North Carolina Promo Code</a></div>
                        <div role="none"><a href="https://www.charlotteobserver.com/betting/article276271871.html" role="menuitem" tabIndex="0">DraftKings North Carolina Promo Code</a></div>
                    </div>
                </div>
                <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex="-1"/>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-17" id="menubtn-17" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Shopping/Reviews</button>
                    <div id="menu-17" aria-labelledby="menubtn-17" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/reviews#navlink=subnav" role="menuitem" tabIndex="0">Reviews</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/product-reviews#navlink=subnav" role="menuitem" tabIndex="0">Product Reviews</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/health-wellness#navlink=subnav" role="menuitem" tabIndex="0">Health and Wellness</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/software-business#navlink=subnav" role="menuitem" tabIndex="0">Software and Business</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/how-to-geek#navlink=subnav" role="menuitem" tabIndex="0">How To Geek</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/shopping#navlink=subnav" role="menuitem" tabIndex="0">Shopping</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/shop-with-us#navlink=subnav" role="menuitem" tabIndex="0">Shop With Us</a></div>
                    </div>
                </div><a className="" href="https://www.miamiherald.com/press-releases#navlink=subnav" role="menuitem" tabIndex="0">Press Releases
                    
                    </a><a className="" href="https://www.miamiherald.com/deals-offers#navlink=subnav" role="menuitem" tabIndex="0">Deals &amp; Offers
                    
                    </a>
                <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex="-1"/>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-21" id="menubtn-21" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Sponsored Content</button>
                    <div id="menu-21" aria-labelledby="menubtn-21" role="menu">
                        <div role="none"><a href="https://www.miamiherald.com/advertise/sponsored-content/?ntv_adpz=3618" role="menuitem" tabIndex="0">Paid Content by BrandPoint</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/partner-content#navlink=subnav" role="menuitem" tabIndex="0">Partner Content</a></div>
                        <div role="none"><a href="https://www.miamiherald.com/family-features#navlink=subnav" role="menuitem" tabIndex="0">Family Features</a></div>
                    </div>
                </div>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-22" id="menubtn-22" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Classifieds</button>
                    <div id="menu-22" aria-labelledby="menubtn-22" role="menu">
                        <div role="none"><a href="https://placeclassifieds.mcclatchy.com/classifieds/raleigh/index.html" role="menuitem" tabIndex="0">Place a Classified Ad</a></div>
                        <div role="none"><a href="https://placeclassifieds.mcclatchy.com/classifieds/raleigh/flow.html?action=jump&amp;_flowId=adportal-classified-flow&amp;categoryName=Recruitment&amp;classificationName=Employment" role="menuitem" tabIndex="0">Post a Job</a></div>
                        <div role="none"><a href="https://classifieds.mcclatchy.com/marketplace/raleigh/" role="menuitem" tabIndex="0">Browse Classifieds</a></div>
                    </div>
                </div><a className="" href="https://placecelebration.mcclatchy.com/celebrations/raleigh/index.html" role="menuitem" tabIndex="0">Place an Ad - Celebrations
                    
                    </a><a className="" href="https://jobs.miamiherald.com/" role="menuitem" tabIndex="0">Search Jobs
                    
                    </a><a className="" href="https://classifieds.mcclatchy.com/marketplace/raleigh/" role="menuitem" tabIndex="0">Search Legal Notices
                    
                    </a>
                <div className="subsection" tabIndex="-1"> <button aria-controls="menu-26" id="menubtn-26" className="summary expander" tabIndex="0" aria-haspopup="true" onclick="this.classList.toggle('open')">Advertising</button>
                    <div id="menu-26" aria-labelledby="menubtn-26" role="menu">
                        <div role="none"><a href="https://business.mcclatchy.com/raleigh" role="menuitem" tabIndex="0">Place an Ad</a></div>
                        <div role="none"><a href="https://hiring.mcclatchy.com/recruitmentproducts" role="menuitem" tabIndex="0">Staffing Solutions</a></div>
                        <div role="none"><a href="https://www.winwithmcclatchy.com/political-advocacy" role="menuitem" tabIndex="0">Political | Advocacy Advertising</a></div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <div id="promo-banner"></div>
</div>

        <div><div className="breaking-news-organism impact" />
        <article className="paper story-body" >
            {nonBodyWebComponents && nonBodyWebComponents.map((webComponent, i) => {
                const toolbar = nonBodyToolbars[i];

                clearMovedWebComponent(webComponent.props.name);
                return (
                  <div style={{width: "100%", maxWidth: "100vw", position: "relative", padding: 0, margin: 0}} key={i} >
                    {cloneElement(toolbar, { key: toolbar.id })}
                    <WebComponent
                      name={webComponent.props.name}
                      id={`${webComponent.props.id}?v=${Date.now()}`}
                      options={webComponent.props.options}
                      script={webComponent.props.script}
                      link={webComponent.props.link}
                    >
                    </WebComponent>
                  </div>
                )
              })}

            <header className="header">
     
              <a className="kicker h6" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman">
                Michelle Kaufman
              </a>

              <h1 className="h1">
                Lionel Messi’s play has been ‘epic’ so far, his humility has been equally impressive | Opinion
              </h1>
              <div className="bio">
                <div>
                  <div>
                    <p className="byline">
                      <a href="mailto:mkaufman@miamiherald.com"> By Michelle Kaufman</a> 
                    </p>
                  </div>
                  <div>
                    <time id="update_date" className="update-date time" dateTime="2023-08-22T12:42:32-04:00">Updated August 22, 2023 12:42 PM</time>
                  </div>
                </div>
              </div>
            </header>

              <figure>
                <div className="lead-item ">
                  <div className="img-container picture ">
                    <picture>
                      {/*[if IE 9]><video style="display: none;"><![endif]*/}
                      <source srcSet="https://www.miamiherald.com/latest-news/rlzwxh/picture278422229/alternates/LANDSCAPE_1140/MIA_Inter_Miami_v_Nashville(2)%20(5)" media="(min-width: 992px)" />
                      <source srcSet="https://www.miamiherald.com/latest-news/rlzwxh/picture278422229/alternates/LANDSCAPE_960/MIA_Inter_Miami_v_Nashville(2)%20(5)" media="(min-width: 768px)" />
                      <source srcSet="https://www.miamiherald.com/latest-news/rlzwxh/picture278422229/alternates/LANDSCAPE_768/MIA_Inter_Miami_v_Nashville(2)%20(5)" media="(min-width: 601px)" />
                      <source srcSet="https://www.miamiherald.com/latest-news/rlzwxh/picture278422229/alternates/LANDSCAPE_640/MIA_Inter_Miami_v_Nashville(2)%20(5)" media="(min-width: 441px)" />
                      <source srcSet="https://www.miamiherald.com/latest-news/rlzwxh/picture278422229/alternates/LANDSCAPE_480/MIA_Inter_Miami_v_Nashville(2)%20(5)" media="(min-width: 320px)" />
                      {/*[if IE 9]></video><![endif]*/}
                      <img className="responsive-image" srcSet="https://www.miamiherald.com/latest-news/rlzwxh/picture278422229/alternates/LANDSCAPE_1140/MIA_Inter_Miami_v_Nashville(2)%20(5)" alt="Inter Miami players lift Inter Miami forward Lionel Messi (10) after they defeated Nashville SC in the Leagues Cup final at GEODIS Park on Saturday, Aug. 19, 2023, in Nashville, Tenn." title="Inter Miami players lift Inter Miami forward Lionel Messi (10) after they defeated Nashville SC in the Leagues Cup final at GEODIS Park on Saturday, Aug. 19, 2023, in Nashville, Tenn." loading="lazy" />
                    </picture>
                  </div>
                  <figcaption>
                    Inter Miami players lift Inter Miami forward Lionel Messi (10) after they defeated Nashville SC in the Leagues Cup final at GEODIS Park on Saturday, Aug. 19, 2023, in Nashville, Tenn.
                    <span className="byline">
                      MATIAS J. OCNER
                    </span>
                    <span className="credit">mocner@miamiherald.com</span>
                  </figcaption>
                </div>
              </figure>
				      {/*<div className="trinity-player-iframe-wrapper" data-player-id="bda55221576fc593a0a17468cae50f61" style={{minHeight: '40px'}}>
				      	<img src="/src/assets/trinity-player.png" style={{width: "100%"}}/>
				      </div>*/}

              <p>For years, just about every time I ran into Jorge Mas, he talked about the possibility of bringing Lionel Messi to Inter Miami. It always seemed a far-fetched dream to this jaded sportswriter who had lived through countless well-intentioned South Florida soccer projects over the past quarter century. </p>

              {bodyWebComponents && bodyWebComponents.map((webComponent, i) => {
                const toolbar = bodyToolbars[i];
                return (
                  <div style={{position: 'relative', maxWidth: "100%", padding: 0, containerType: noInlineSizeNames.includes(webComponent.props.name) ? "" : "inline-size"}} key={i}>
                    {cloneElement(toolbar, { key: toolbar.id })}
                    <WebComponent
                      name={webComponent.props.name}
                      id={`${webComponent.props.id}?v=${Date.now()}`}
                      options={webComponent.props.options}
                      script={webComponent.props.script}
                      link={webComponent.props.link}
                    >
                    </WebComponent>
                  </div>
                )
              })}

              <p>Why would Messi, arguably the greatest player of all time, the World Cup champion, the Argentine icon, come to Major League Soccer to play for a fledgling Inter Miami team that holds its games in a temporary stadium?</p>{/**/}{/*]*/}{/*[*/}
              <p>It made little sense.</p>{/**/}{/*]*/}{/*[*/}
              <p>Then, on April 8, during halftime of Inter Miami’s game against FC Dallas, I ran into Mas, the passionate team owner, on the DRV PNK Stadium field and he said something that made me start to believe. Maybe not believe, but at least entertain the thought that this might happen.</p>

              <p>The University of Miami men’s and women’s basketball teams were being honored by Inter Miami for their historic March Madness runs, and I was on the field to capture some photos. I asked Mas how things were going, as his team had lost four games in a row, and he replied: “Michelle, it’s going to be an epic summer.”</p>{/**/}{/*]*/}{/*[*/}
              <p>“Epic?” I asked, wearing a skeptical grin.</p>{/**/}{/*]*/}{/*[*/}
              <p>“Epic!” Mas said, emphatically. Then he added, “Epic! Mark my words.”</p>

              <div className="zone grid combo" data-type="ad">{/*[*/}
                <div id="zone-el-102" className="zone zone-el hidden" data-type="ad"/>
                  <div id="zone-el-103" className="zone zone-el stn-player" data-type="ad">
                    <div>
                      <div id="stn-player-section-front">
                        <div className="s2nPlayer element-spacing-large k-BX10tEL0" data-type="float" />
                    </div>
                  </div>
                </div>{/*]*/}
              </div>{/*]*/}{/*[*/}

              <p>That game ended in a 1-0 loss. Miami’s losing skid stretched to five games. A chorus of boos rained down on the team as players and then-coach Phil Neville trudged dejectedly toward the tunnel.</p>{/**/}{/*]*/}{/*[*/}
              <h3>Messi drives turnaround</h3>
              <p>Fast forward four-and-a-half months to Aug. 19. I am in Nashville, in the bowels of Geodis Park stadium. Messi and his teammates are still out on the field celebrating their <a href="https://www.miamiherald.com/sports/mls/inter-miami/article278388354.html" target="_self" rel="Follow">dramatic victory in the Leagues Cup final,</a> a game that ended with an 11-round penalty kick shootout. The pink-clad Miami players are clutching, kissing and hoisting the trophy, the first in club history.</p>{/**/}{/*]*/}{/*[*/}
              <p>They then surprised new coach Tata Martino with a champagne shower during his news conference.</p>

              <div className="zone grid combo" data-type="ad">
                <div id="zone-el-104" className="cap-width zone-el" data-type="ad"/>
                <div id="zone-el-105" className="cap-width zone zone-el" data-type="ad"/>
              </div>{/*]*/}{/*[*/}

              <p>Mas and co-owner David Beckham were in the tunnel, outside the locker room, and wandered over to the gathering of reporters to share their thoughts. Beckham was near tears after his nine-year journey to get this team where it is today. Mas was giddy.</p>{/**/}{/*]*/}{/*[*/}
              <p>“To see this tonight is crazy,” Mas said. “This is for the city of Miami, for our fans after so many years of sacrifice… to see Lionel with that smile, seeing how all the guys are playing, I anticipate this will be the first of many trophies. It’s a spectacular night and an indication of all the work we put into it. When the game ended 1-1 in regulation, David and I looked at each other and I said, `Nothing has come easy for us.’”</p>{/**/}{/*]*/}{/*[*/}
              <p>As the media members walked away, Mas stepped toward me, smiled, and said one word as he pumped his fist: “Epic.”</p>

              <div id="zone-el-106" className="zone zone-el" index={12} issportsarticle="true" stnplayerkill="false" allowstnplayer="true" data-type="ad"/>{/*]*/}{/*[*/}

              <h3>Messi's leadership</h3>
              <p>Epic, indeed.</p>{/**/}{/*]*/}{/*[*/}
              <p>Not only did Messi defy all odds and decide to join Inter Miami, his former FC Barcelona teammates Sergio Busquets and Jordi Alba signed and are also along for the ride. The trio helped form one of the greatest club teams in history and in just one month their field vision, skill and experience have elevated the team with the worst record in MLS into perhaps the best team in the league.</p>{/**/}{/*]*/}{/*[*/}
              <p>Inter Miami had five wins and 22 goals in 22 games before Messi’s arrival. The team has seven wins and 22 goals in seven games since he joined the team. And a trophy. Messi has scored 10 goals in his first seven games, and each one seems more spectacular than the last.</p>{/**/}{/*]*/}{/*[*/}
              <p>Equally impressive, maybe more, has been Messi’s humility and leadership as he adapts to this new stage of his career.</p>

              <div id="zone-el-107" className="zone zone-el" index={16} issportsarticle="true" stnplayerkill="false" allowstnplayer="true" data-type="ad"/>{/*]*/}{/*[*/}

              <p>A simple postgame gesture Saturday night spoke volumes as to who Messi is as a person. As players made their way to the stage for the trophy presentation, Messi took off his captain’s armband and sought out DeAndre Yedlin, insisting he wear it. “No, no, no, no, no,” Yedlin said, smiling. Messi put the band on Yedlin’s left arm and the two players lifted the trophy together.</p>{/**/}{/*]*/}{/*[*/}
              <p>It was a beautiful moment.</p>{/**/}{/*]*/}{/*[*/}
              
              <figure>
                  <div>
                      <div className="img-container picture ">
                          <picture>
                              <source srcSet="https://www.miamiherald.com/latest-news/x1jxsb/picture280261124/alternates/LANDSCAPE_1140/MIA_Inter_Miami_v_Cincinnat%20(2)" media="(min-width: 992px)" />
                              <source srcSet="https://www.miamiherald.com/latest-news/x1jxsb/picture280261124/alternates/LANDSCAPE_960/MIA_Inter_Miami_v_Cincinnat%20(2)" media="(min-width: 768px)" />
                              <source srcSet="https://www.miamiherald.com/latest-news/x1jxsb/picture280261124/alternates/LANDSCAPE_768/MIA_Inter_Miami_v_Cincinnat%20(2)" media="(min-width: 601px)" />
                              <source srcSet="https://www.miamiherald.com/latest-news/x1jxsb/picture280261124/alternates/LANDSCAPE_640/MIA_Inter_Miami_v_Cincinnat%20(2)" media="(min-width: 441px)" />
                              <source srcSet="https://www.miamiherald.com/latest-news/x1jxsb/picture280261124/alternates/LANDSCAPE_480/MIA_Inter_Miami_v_Cincinnat%20(2)" media="(min-width: 320px)" />
                              <img className="responsive-image" srcSet="https://www.miamiherald.com/latest-news/x1jxsb/picture280261124/alternates/LANDSCAPE_1140/MIA_Inter_Miami_v_Cincinnat%20(2)" alt="Inter Miami forward Lionel Messi (10) arrives before playing against FC Cincinnati in their MLS match at DRV PNK Stadium on Saturday, Oct. 7, 2023, in Fort Lauderdale, Fla." title="Inter Miami forward Lionel Messi (10) arrives before playing against FC Cincinnati in their MLS match at DRV PNK Stadium on Saturday, Oct. 7, 2023, in Fort Lauderdale, Fla." />
                          </picture>
                      </div>
                      <figcaption>
                          Inter Miami forward Lionel Messi (10) arrives before playing against FC Cincinnati in their MLS match at DRV PNK Stadium on Saturday, Oct. 7, 2023, in Fort Lauderdale, Fla.
                          <span className="byline">
                              MATIAS J. OCNER
                          </span>
                          <span className="credit">mocner@miamiherald.com</span>
                      </figcaption>
                  </div>
              </figure>

              <p>Yedlin was the captain before Messi arrived. The U.S. national team defender took on a leadership role when he joined Inter Miami in 2022, even though midfielder Gregore wore the captain’s armband. His influence was undeniable, as teammates began joining him in meditation sessions and barefoot post-practice “grounding” walks around the field. He also persuaded Neville to let players show off their fashion sense before games rather than show up in team gear.</p>{/**/}{/*]*/}{/*[*/}
              <p>When Gregore sustained a serious foot injury early this season, Yedlin assumed the official role of captain. When Messi showed up, Yedlin gave the armband to the Argentine legend.</p>

              <div id="zone-el-108" className="zone zone-el" index={20} issportsarticle="true" stnplayerkill="false" allowstnplayer="true" data-type="ad"/>{/*]*/}{/*[*/}

              <p>Inter Miami goalkeeper Drake Callender was touched by Messi’s gesture Saturday night.</p>{/**/}{/*]*/}{/*[*/}
              <p>“He recognizes what this team has been through even prior to him coming here,” Callender said. “He knows there have been different leaders who have stepped up and DeAndre is definitely serving as one of our leaders throughout the season. So, for him to recognize that is huge. It shows you that he is humble. He respects everyone on the team. For him to do that shows what kind of teammate he is.”</p>{/**/}{/*]*/}{/*[*/}
              <p>Messi was equally humble, disarming and generous during a <a href="https://www.miamiherald.com/sports/mls/inter-miami/article278331359.html" target="_self" rel="Follow">five-minute interview </a>he granted the Miami Herald last Thursday, following his first news conference since joining the team. I wasn’t sure what to expect from an athlete with 483 million Instagram followers and an estimated net worth of $600 million, a guy who clearly does not need any more publicity.</p>

              <div id="zone-el-109" className="zone zone-el" index={23} issportsarticle="true" stnplayerkill="false" allowstnplayer="true" data-type="ad"/>{/*]*/}{/*[*/}

              <p>He could not have been nicer. I asked him about his Marvel goal celebrations, postgame jersey swaps, Miami traffic, Gonzalo Higuain, and South Florida’s Latin American flavor. He smiled throughout the interview, shook my hand and those of our photographers and told us it was a pleasure meeting us.</p>{/**/}{/*]*/}{/*[*/}
              <p>Later that day, when the video of that interview was posted online, it finally hit me. Lionel Messi, arguably the greatest player of all time, the World Cup champion, the Argentine icon, came to Major League Soccer to play for a fledgling Inter Miami team that holds its games in a temporary stadium.</p>{/**/}{/*]*/}{/*[*/}
              <p>That really happened. It was not a mirage. I have the handshake to prove it.</p>

              <div id="zone-el-110" className="zone zone-el" index={26} issportsarticle="true" stnplayerkill="false" allowstnplayer="true" data-type="ad"/>{/*]*/}{/*[*/}

              <p>Epic, indeed.</p>{/**/}{/*]*/}{/*[*/}
              
              <div className="embed-infographic"><iframe frameBorder={0} height={200} scrolling="no" src="https://playlist.megaphone.fm/?e=MCCLATCHY9635816888" width="100%" /></div>{/**/}{/*]*/}{/*]*/}{/**/}<p className="summary gray">This story was originally published <span className="inline-block">August 21, 2023, 3:56 PM.</span></p>{/**/}{/**/}<div /><div className=""><div className="related-stories story-module">
                <h5 className="caps">Related stories from  Miami Herald</h5>
                <div className="grid">
                  <article className="package">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="/sports/mls/inter-miami">
                        Inter Miami
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/mls/inter-miami/article278388354.html#storylink=related_inline">
                        Messi scores, Callender shines, Inter Miami wins Leagues Cup in 11-round PK shootout
                      </a>
                    </h3>
                    <div className="time">
                      August 19, 2023 11:49 PM
                    </div>
                  </article>
                </div>
                <hr />
              </div></div><div className="story-module"><article> 
                <div className="author-card package">
                  <div className="thumb">
                    <a href="/profile/218644770">
                      <img className="author-thumb" src="https://www.miamiherald.com/latest-news/x5i9kr/picture35400450/alternates/FREE_480/Michelle%20Kaufman" alt="Profile Image of Michelle Kaufman" loading="lazy" />
                    </a>
                  </div>
                  <div className="flex">
                    <h6 className="byline">
                      <a href="/profile/218644770">Michelle Kaufman</a>
                    </h6>
                    <div className="social-media">
                      <a href="https://twitter.com/kaufsports">
                        <svg className="twitter" viewBox="0 0 512 512" aria-labelledby="twitter"><title id="twitter">twitter</title><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                      </a>
                      <a href="https://www.facebook.com/MiamiHeraldSports/">
                        <svg className="facebook" viewBox="0 0 264 512" aria-labelledby="facebook"><title id="facebook">facebook</title><path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z" /></svg>
                      </a>
                      <a href="mailto:mkaufman@MiamiHerald.com">
                        <svg className="envelope" viewBox="0 0 512 512" aria-labelledby="email"><title id="email">email</title><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
                      </a>
                      <a href="tel:305-376-3438" className="telephone flex">
                        <svg className="phone" viewBox="0 0 512 512" aria-labelledby="phone"><title id="phone">phone</title><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>
                        <span className="small gray icon-label">305-376-3438</span>
                      </a>
                    </div>
                  </div>
                  <div className="summary package">
                    <span>Miami Herald sportswriter Michelle Kaufman has covered 14 Olympics, six World Cups, Wimbledon, U.S. Open, NCAA Basketball Tournaments, NBA Playoffs, Super Bowls and has been the soccer writer and University of Miami basketball beat writer for 25 years. She was born in Frederick, Md., and grew up in Miami. </span>
                  </div>
                </div>
              </article></div><div id="zone-el-16" className="zone-el" /></article><div id="zone-el-9" className="zone-el"><div /></div><div id="zone-el-12" className="zone-el"><div><section id="subscription-cta-container">
                <div className="card horizontal swg-promo">
                  <div className="promo package sans">
                    <h5 className="title h1">Sports Pass is your ticket to Miami sports</h5>
                    <h6 className="h3">#ReadLocal</h6>
                  </div>
                  <div className="package">
                    <p className="summary">Get in-depth, sideline coverage of Miami area sports - only $1 a month</p>
                    <a href="https://account.miamiherald.com/subscribe/create?param=f3JDC0s=&offer=NmEfaxcUb3lSCUJAfRIzCz4kHxU6bzo9Bw1AG15QPgoUG0hQeHNFDEBCb29STx0HLisVS1BIbw45eCEidHo9dkE%2FAnZJAFAP&cid=cta_section-sports_.99mo-3mo-5.99-sports-pass_202010" className="button impact">VIEW OFFER</a>
                  </div>
                </div>
              </section></div></div><div id="zone-el-13" className="zone-el"><section><div className="grid"><article id="secondary-story-2" className="card ">
                  <figure>
                    <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article275883451.html#storylink=moresection" className="image-link-macro kfocusable" title="Uncertainty about Messi, Busquets is hurting Inter Miami. Club, fans need answers now | Opinion">
                      <img src="https://www.miamiherald.com/latest-news/mcmzc1/picture275891546/alternates/LANDSCAPE_480/sipa_46566336.jpg" alt="Uncertainty about Messi, Busquets is hurting Inter Miami. Club, fans need answers now | Opinion" loading="lazy" />
                    </a>
                  </figure>
                  <div className="card package  ">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/">
                        Michelle Kaufman
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article275883451.html#storylink=moresection">
                        Uncertainty about Messi, Busquets is hurting Inter Miami. Club, fans need answers now | Opinion
                      </a>
                    </h3>
                    <div className="update-date time" data-originaldate={1685463091}>Updated May 30, 2023 12:11 PM </div>
                  </div>{/* end no-img Story Card div */}
                </article>
                <article id="secondary-story-3" className="card ">
                  <figure>
                    <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article275407791.html#storylink=moresection" className="image-link-macro kfocusable" title="Lonnie Walker IV, Bruce Brown put UM bond on hold during NBA Western Conference finals | Opinion">
                      <img src="https://www.miamiherald.com/latest-news/lsngny/picture213458094/alternates/LANDSCAPE_480/BruceBrown" alt="Lonnie Walker IV, Bruce Brown put UM bond on hold during NBA Western Conference finals | Opinion" loading="lazy" />
                    </a>
                  </figure>
                  <div className="card package  ">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/">
                        Michelle Kaufman
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article275407791.html#storylink=moresection">
                        Lonnie Walker IV, Bruce Brown put UM bond on hold during NBA Western Conference finals | Opinion
                      </a>
                    </h3>
                    <div className="update-date time" data-originaldate={1684255045}>Updated May 16, 2023 12:37 PM </div>
                  </div>{/* end no-img Story Card div */}
                </article>
                <article id="secondary-story-4" className="card ">
                  <figure>
                    <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article274950571.html#storylink=moresection" className="image-link-macro kfocusable" title="There are no ‘failures’ in sports. Heed the words of Giannis and President Roosevelt | Opinion">
                      <img src="https://www.miamiherald.com/latest-news/bwvr4c/picture274679226/alternates/LANDSCAPE_480/Heat_v_Bucks_MJO_16.jpg" alt="There are no ‘failures’ in sports. Heed the words of Giannis and President Roosevelt | Opinion" loading="lazy" />
                    </a>
                  </figure>
                  <div className="card package  ">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/">
                        Michelle Kaufman
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article274950571.html#storylink=moresection">
                        There are no ‘failures’ in sports. Heed the words of Giannis and President Roosevelt | Opinion
                      </a>
                    </h3>
                    <div className="time">
                      May 02, 2023 1:21 PM
                    </div>
                  </div>{/* end no-img Story Card div */}
                </article>
                <article id="secondary-story-5" className="card ">
                  <figure>
                    <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article274435765.html#storylink=moresection" className="image-link-macro kfocusable" title="NIL is “the next arms race” in college sports, UM athletes need more than John Ruiz | Opinion">
                      <img src="https://www.miamiherald.com/latest-news/veb071/picture256480601/alternates/LANDSCAPE_480/MIA_104JohnRuizUM00NEWPPP" alt="NIL is “the next arms race” in college sports, UM athletes need more than John Ruiz | Opinion" loading="lazy" />
                    </a>
                  </figure>
                  <div className="card package  ">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/">
                        Michelle Kaufman
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article274435765.html#storylink=moresection">
                        NIL is “the next arms race” in college sports, UM athletes need more than John Ruiz | Opinion
                      </a>
                    </h3>
                    <div className="update-date time" data-originaldate={1681863753}>Updated April 18, 2023 8:22 PM </div>
                  </div>{/* end no-img Story Card div */}
                </article>
                <article id="secondary-story-6" className="card ">
                  <figure>
                    <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article274190670.html#storylink=moresection" className="image-link-macro kfocusable" title="Feathers, stars, trash-talking, TikTok-ing are just what women’s basketball needed | Opinion">
                      <img src="https://www.kentucky.com/latest-news/iqkmfr/picture273913650/alternates/LANDSCAPE_480/20230402_add_aj6_232.JPG" alt="Feathers, stars, trash-talking, TikTok-ing are just what women’s basketball needed | Opinion" loading="lazy" />
                    </a>
                  </figure>
                  <div className="card package  ">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/">
                        Michelle Kaufman
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article274190670.html#storylink=moresection">
                        Feathers, stars, trash-talking, TikTok-ing are just what women’s basketball needed | Opinion
                      </a>
                    </h3>
                    <div className="update-date time" data-originaldate={1681251092}>Updated April 11, 2023 6:11 PM </div>
                  </div>{/* end no-img Story Card div */}
                </article>
                <article id="secondary-story-7" className="card ">
                  <figure>
                    <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article273126405.html#storylink=moresection" className="image-link-macro kfocusable" title="Here is a list of reasons March Madness is the best sporting event in America | Opinion">
                      <img src="https://www.miamiherald.com/latest-news/379rc8/picture272241168/alternates/LANDSCAPE_480/MIA_20230206AD3097MIAMIHurr" alt="Here is a list of reasons March Madness is the best sporting event in America | Opinion" loading="lazy" />
                    </a>
                  </figure>
                  <div className="card package  ">
                    <h2 className="caps kicker-id h6">
                      <a className="kicker" href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/">
                        Michelle Kaufman
                      </a>
                    </h2>
                    <h3>
                      <a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/article273126405.html#storylink=moresection">
                        Here is a list of reasons March Madness is the best sporting event in America | Opinion
                      </a>
                    </h3>
                    <div className="update-date time" data-originaldate={1678884148}>Updated March 15, 2023 8:42 AM </div>
                  </div>{/* end no-img Story Card div */}
                </article></div></section></div>{/**/}<div id="zone-el-99" className="zone-el" />{/**/}</div>
        <footer className="impact">
          <section className="footer">
            <div className="package footer-connect">
              <h6 className="h3">Take Us With You</h6>
              <p className="summary">Real-time updates and all local stories you want right in the palm of your hand.</p>
              <div className="flex">
                <div className="icon">
                  <img src="https://www.miamiherald.com/wps/build/images/miamiherald/favicon-32.png" alt="Icon for mobile apps" loading="lazy" />
                </div>
                <a href="https://miamiherald.com/mobile" className="more-link icon-label h4">
                  Miami Herald App
                </a>
              </div>
              <div className="flex">
                <svg viewBox="0 0 512 512"><path d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z" /></svg>
                <a href="http://t.news.miamiherald.com/webApp/mccSignupPage?siteName=miamiherald" className="more-link icon-label h4">
                  View Newsletters 
                </a>
              </div>
              <div className="flex social">
                <a href="https://www.facebook.com/pages/Miami-Herald/38925837299" aria-label="Facebook link">
                  <svg viewBox="0 0 264 512"><path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z" /></svg>
                </a>
                <a href="https://twitter.com/miamiherald" aria-label="Twitter link">
                  <svg viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                </a>
                <a href="http://www.youtube.com/MiamiHerald" aria-label="Youtube link">
                  <svg viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                </a>
                <a href="https://www.instagram.com/miamiherald/" aria-label="Instagram link">
                  <svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <div className="package">
                <h6 className="h5 caps">Subscriptions</h6>
                <a href="https://subscribe.miamiherald.com/beinformed">Start a Subscription</a>
                <a href="https://www.miamiherald.com/customer-service/#navlink=mi_footer">Customer Service</a>
                <a href="https://www.miamiherald.com/e-edition/today/#navlink=mi_footer">eEdition</a>
                <a href="https://myaccount.miamiherald.com/mia_mh/home">Vacation Hold</a>
                <a href="https://myaccount.miamiherald.com/mia_mh/home">Pay Your Bill</a>
              </div>
              <div className="package">
                <h6 className="h5 caps">Learn More</h6>
                <a href="https://www.mcclatchy.com/our-impact/markets/miami-herald/">About Us</a>
                <a href="https://www.miamiherald.com/customer-service/#navlink=mi_footer">Contact Us</a>
                <a href="https://t.news.miamiherald.com/webApp/mccSignupPage?siteName=miamiherald">Newsletters</a>
                <a href="https://www.miamiherald.com/archives/#navlink=mi_footer">Archives</a>
                <a href="https://www.miamiherald.com/reviews/#navlink=mi_footer">Reviews</a>
                <a href="https://www.miamiherald.com/betting/#navlink=mi_footer">Sports Betting</a>
                <a href="https://www.miamiherald.com/money/#navlink=mi_footer">Personal Finance</a>
              </div>
              <div className="package">
                <h6 className="h5 caps">Advertising</h6>
                <a href="https://go.mcclatchy.com/media-capabilities-miami/p/1">McClatchy Advertising</a>
                <a href="https://business.mcclatchy.com/miami">Place an Ad</a>
                <a href="https://placeclassifieds.mcclatchy.com/classifieds/miami/index.html">Place a Classified Ad</a>
                <a href="https://herald.obituaries.com">Place an Obituary</a>
                <a href="https://hiring.mcclatchy.com/recruitmentproducts">Staffing Solutions</a>
                <a href="https://www.winwithmcclatchy.com/political-advocacy">Political |  Advocacy Advertising</a>
              </div>
            </div>
          </section>
          <p className="mmn-company">Part of the McClatchy Media Network</p>
        </footer>
        <section className="bottom-nav h5">
          <a className="legal-links-item caps" href="https://www.miamiherald.com/site-services/copyright/#navlinks=footer">Copyright</a>
          <a className="legal-links-item caps" href="https://www.miamiherald.com/site-services/commenting-policy/#navlinks=footer">Commenting Policy</a>
          <a className="legal-links-item caps" href="https://www.mcclatchy.com/privacy-policy/">Privacy Policy</a>
          <a className="legal-links-item caps" href="https://privacy-central.securiti.ai/#/dsr-universal/0a979fab-900d-4113-aab0-e2bf786400ac">Your Privacy Choices</a>
          <a className="legal-links-item caps" href="https://www.miamiherald.com/site-services/terms-of-service/#navlink=mi_footer">Terms of Service</a>
        </section>
      </div>
 )
}


export default SampleArticle;
