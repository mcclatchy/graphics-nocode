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

    const noInlineSizeNames = ['scrolling-map']

    const nonBodyComponentNames = ["lead-image", "lead-logo", "lead-video"]
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
        {/* WPS upper navbar for subpubs */}
        <div className="upper-nav"><div className="tab active"><a href="/" aria-label="Miami Herald"><img className="logo" src="https://www.miamiherald.com/wps/build/images/miamiherald/logo.svg" alt="Miami Herald Logo" width={300} height={50} /><img className="favicon" src="https://www.miamiherald.com/wps/build/images/miamiherald/favicon-96.png" alt="Miami Herald Logo" width={96} height={96} layout="responsive" /></a></div>{/*[*/}<div className="tab">{/*[*/}<a href="https://www.miamiherald.com/miami-com/">{/*[*/}<img className="logo" src="https://www.miamiherald.com/wps/build/images/miamiherald-miami-com/logo.svg" alt="Miami com Logo" width={300} height={50} /><img className="favicon" src="https://mcclatchy.github.io/design/img/miami.com-favicon.svg" alt="Miami com Logo" width={96} height={96} layout="responsive" />{/*]*/}</a>{/*]*/}</div><div className="tab">{/*[*/}<a href="https://www.miamiherald.com/detour">{/*[*/}<img className="logo" src="https://media.mcclatchy.com/static/images/logos/detour_big.svg" alt="detour logo" width={300} height={50} /><img className="favicon" src="https://media.mcclatchy.com/static/images/logos/detour_small.svg" alt="detour logo" width={96} height={96} layout="responsive" />{/*]*/}</a>{/*]*/}</div><div className="tab">{/*[*/}<a href="https://www.flkeysnews.com/">{/*[*/}<img className="logo" src="https://www.flkeysnews.com/wps/build/images/flkeysnews/logo.svg" alt="FL Keys News Logo" width={300} height={50} /><img className="favicon" src="https://www.flkeysnews.com/wps/build/images/flkeysnews/favicon-96.png" alt="FL Keys News Logo" width={96} height={96} layout="responsive" />{/*]*/}</a>{/*]*/}</div><div className="tab">{/*[*/}<a href="https://www.elnuevoherald.com/">{/*[*/}<img className="logo" src="https://www.elnuevoherald.com/wps/build/images/elnuevoherald/logo.svg" alt="El Nuevo Herald Logo" width={300} height={50} /><img className="favicon" src="https://www.elnuevoherald.com/wps/build/images/elnuevoherald/favicon-96.png" alt="El Nuevo Herald Logo" width={96} height={96} layout="responsive" />{/*]*/}</a>{/*]*/}</div><div className="tab">{/*[*/}<a href="https://www.bestofmiamidade.com/">{/*[*/}<img className="logo" src="https://media.mcclatchy.com/static/images/logos/badge-bmd.svg" alt="Best of Miami-Dade" width={300} height={50} /><img className="favicon" src="https://media.mcclatchy.com/static/images/logos/icon-bmd.svg" alt="Best of Miami-Dade" width={96} height={96} layout="responsive" />{/*]*/}</a>{/*]*/}</div>{/*]*/}</div>
        <div id="mastheadVueContainer" data-v-app>
			    <div id="mastheadVueContainer">
			        <div id="zone-el-1" className="zone-el hidden" data-type="ad">
			            <div data-unit="MIA.site_miamiherald/Sports" data-targeting="{&quot;slot&quot;:&quot;overlay&quot;}" className="htlad-web-overlay">
			                <div className="htl-ad" id="htlad-1" data-unit="MIA.site_miamiherald/Sports" name="htlunit-web-overlay" data-eager data-sizes="0x0:|768x0:|992x0:|1200x0:" data-prebid="0x0:|768x0:|992x0:|1200x0:" data-oop data-targeting="{&quot;htl_refresh&quot;:[&quot;1&quot;],&quot;htl_slot_gpid&quot;:[&quot;web-overlay&quot;],&quot;slot&quot;:&quot;overlay&quot;}">
			                    <div className="htl-ad-gpt" id="htlad-1-gpt" data-google-query-id="CPXDg7HE84ADFdw-RAgdAacHmw" style={{display: 'none'}}>
			                        <div id="google_ads_iframe_/7675/MIA.site_miamiherald/Sports_0__container__" style={{border: '0pt none', margin: 'auto', textAlign: 'center'}} />
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div id="zone-el-2" className="zone hidden" data-type="ad">
			            <div id="leaderboard-ad">
			                <div className="mobile-leaderboard">
			                    <div data-unit="MIA.site_miamiherald/Sports" data-targeting="{&quot;atf&quot;:&quot;y&quot;,&quot;pkg&quot;:&quot;a&quot;,&quot;slot&quot;:&quot;top-banner&quot;}" className="htlad-web-top-banner">
			                        <div className="htl-ad" id="htlad-2" data-unit="MIA.site_miamiherald/Sports" name="htlunit-web-top-banner" data-eager data-sizes="0x0:320x50|768x0:728x90|992x0:970x250,970x90,728x90|1200x0:970x250,970x90,728x90" data-prebid="0x0:web-top-banner-extraSmall|768x0:web-top-banner-small|992x0:web-top-banner-medium|1200x0:web-top-banner-large" data-refresh="viewable" data-refresh-secs={30} data-refresh-max={100} data-targeting="{&quot;atf&quot;:&quot;y&quot;,&quot;htl_refresh&quot;:[&quot;1&quot;],&quot;htl_slot_gpid&quot;:[&quot;web-top-banner&quot;],&quot;pkg&quot;:&quot;a&quot;,&quot;slot&quot;:&quot;top-banner&quot;}">
			                            <div className="htl-ad-gpt htl-size-970x250" id="htlad-2-gpt" data-google-query-id="CPnbhbHE84ADFdw-RAgdAacHmw">
			                                <div id="google_ads_iframe_/7675/MIA.site_miamiherald/Sports_1__container__" style={{border: '0pt none', margin: 'auto', textAlign: 'center', width: '970px', height: '250px'}}><iframe frameBorder={0} src="https://d1a94b0d7334ae2ae4b9b35a1250c81e.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html" id="google_ads_iframe_/7675/MIA.site_miamiherald/Sports_1" title="3rd party ad content" scrolling="no" marginWidth={0} marginHeight={0} width={970} height={250} data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabIndex={0} data-google-container-id={2} style={{border: '0px', verticalAlign: 'bottom'}} data-load-complete="true" /></div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
<div id="flag" className="paper masthead" role="banner">
    <div className="sds-flag">
        <div className="flag-menu row" role="menu">
        
        <button aria-haspopup="true" role="menuitem" id="sectionsmenu">
          <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.623635 2.47959H16.8381C17.1826 2.47959 17.4618 2.23291 17.4618 1.92857V0.55102C17.4618 0.246685 17.1826 0 16.8381 0H0.623635C0.279193 0 0 0.246685 0 0.55102V1.92857C0 2.23291 0.279193 2.47959 0.623635 2.47959ZM0.623635 8.9898H16.8381C17.1826 8.9898 17.4618 8.74311 17.4618 8.43878V7.06122C17.4618 6.75689 17.1826 6.5102 16.8381 6.5102H0.623635C0.279193 6.5102 0 6.75689 0 7.06122V8.43878C0 8.74311 0.279193 8.9898 0.623635 8.9898ZM0.623635 15.5H16.8381C17.1826 15.5 17.4618 15.2533 17.4618 14.949V13.5714C17.4618 13.2671 17.1826 13.0204 16.8381 13.0204H0.623635C0.279193 13.0204 0 13.2671 0 13.5714V14.949C0 15.2533 0.279193 15.5 0.623635 15.5Z"></path>
          </svg>
        </button>

        <a href="#primary-content" className="flex tabkey-reveal" accessKey="1" tabIndex="1">
          <span className="button impact">Skip to Content</span>
        </a>

        <form id="search-icon" action="/search/" className="search row h-phone" role="search" method="POST">
          <label htmlFor="flag-search-input">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="m16.768 14.699-3.31-3.31a.796.796 0 0 0-.565-.233h-.541a6.872 6.872 0 0 0 1.46-4.25A6.905 6.905 0 0 0 6.907 0 6.905 6.905 0 0 0 0 6.906a6.905 6.905 0 0 0 6.906 6.907 6.872 6.872 0 0 0 4.25-1.461v.54c0 .213.083.416.233.565l3.31 3.31a.794.794 0 0 0 1.126 0l.94-.94a.8.8 0 0 0 .003-1.128Zm-9.862-3.543c-2.347 0-4.25-1.899-4.25-4.25 0-2.347 1.9-4.25 4.25-4.25 2.348 0 4.25 1.9 4.25 4.25 0 2.348-1.899 4.25-4.25 4.25Z"></path>
            </svg>
          </label>
          <input id="flag-search-input" className="search-field" type="text" name="q" placeholder=" " aria-label="Search Kansas City Star" tabIndex="0"/>
        </form>

        </div>
        <div id="signInOut" className="flag-account row"><a href="https://account.miamiherald.com/auth0?section=ecefrontpage" id="logIn">LOG IN</a><a href="https://subscribe.miamiherald.com/holiday-sale" className="button">SUBSCRIBE NOW</a>
        </div>
        <a href="https://www.miamiherald.com" aria-label="Miami Herald" className="flag-logo"><img src="https://www.miamiherald.com/wps/build/images/miamiherald/logo.svg" alt="miamiherald Logo" className="logo" width="3770" height="300"/>
            <h1 style={{position: "absolute", outline: "none", display: "none"}}>More time in G League coming for Miami Heat’s Nikola Jovic | Miami Herald</h1>
            <p className="mmn-company">Part of the McClatchy Media Network</p>
        </a>
        <div className="flag-left stack h-phone">
            <p><b>Monday, December 18, 2023</b></p>
            <p><a href="https://eedition.miamiherald.com/app/MIAHER" aria-label="eEdition">Today's eEdition</a></p>
        </div>
        <div className="flag-right stack h-phone">
          <div className="row">
            <a href="https://www.miamiherald.com/news/weather-news/" aria-label="Weather" role="menuitem">
              <img width="40" height="40" src="https://www.miamiherald.com/wps/source/images/widgets/weather/wxicons-blk/wxicons-blk-6.svg" alt="Mostly cloudy"/>
              <span><b>71°F</b> <small>78° 62°</small></span>
            </a>
          </div>
        </div>
        <div className="flag-nav slider">
            <div className="row">
                <div><a href="https://www.miamiherald.com/news/#navlink=navbar">News</a></div>
                <div><a href="https://www.miamiherald.com/sports/#navlink=navbar">Sports</a></div>
                <div><a href="https://www.miamiherald.com/news/business/#navlink=navbar">Business</a></div>
                <div><a href="https://www.miamiherald.com/news/politics-government/#navlink=navbar">Politics</a></div>
                <div><a href="https://www.miamiherald.com/opinion/#navlink=navbar">Opinion</a></div>
                <div><a href="https://www.miamiherald.com/miami-com/restaurants/#navlink=navbar">Food &amp; Drink</a></div>
                <div><a href="https://www.miamiherald.com/news/local/environment/climate-change/#navlink=navbar">Climate Change</a></div><span className="separator">•</span>
                <div><a href="https://www.miamiherald.com/betting/#navlink=navbar">Sports Betting</a></div>
                <div><a href="https://www.miamiherald.com/money/#navlink=navbar">Personal Finance</a></div>
                <div><a href="https://classifieds.mcclatchy.com/marketplace/miami/category/Legals/Legals/">Public Notices</a></div>
                <div><a href="https://www.legacy.com/us/obituaries/herald/browse/">Obituaries</a></div>
                <div><a href="https://www.miamiherald.com/shopping/#navlink=navbar">Shopping</a></div>
            </div>
        </div>
    </div>
</div>
			        <nav className="main-nav sans summary impact hidden jsready" id="mainNav" role="menu" aria-hidden="true" tabIndex={-1}><button id="closenavigation" className="summary flex" tabIndex={0}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
			                    <title>Close navigation panel</title>
			                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" fill="white" />
			                </svg><span className="h5 icon-label">SECTIONS</span></button>
			            <div id="nav-menu-search-icon" className="search flex h-desktop" role="menuitem" tabIndex={0}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg><span id="searchTitle" className="h5 icon-label soft">Search</span>
			                <form tabIndex={-1} action="/search/" className="site-search-id flex" role="search"><input id="nav-menu-search-bar" type="text" name="q" placeholder="Search" aria-label="Search Miami Herald" tabIndex={0} /><button type="submit" aria-label="Search" tabIndex={-1}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></button></form>
			            </div>{/*v-if*/}<a href="https://www.miamiherald.com/#navlink=subnav" role="menuitem" tabIndex={0}>Home {/*v-if*/}{/*v-if*/}</a>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-1" id="menubtn-1" className="summary expander" tabIndex={0} aria-haspopup="true">Customer Service</button>
			                <div id="menu-1" aria-labelledby="menubtn-1" role="menu">
			                    <div role="none"><a href="https://www.mcclatchy.com/our-impact/markets/miami-herald" role="menuitem" tabIndex={0}>About Us</a></div>
			                    <div role="none"><a href="https://account.miamiherald.com/my-account/" role="menuitem" tabIndex={0}>Account Management</a></div>
			                    <div role="none"><a href="https://miamiherald.newspapers.com/" role="menuitem" tabIndex={0}>Archives</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/customer-service/contact-us/#navlink=subnav" role="menuitem" tabIndex={0}>Contact Us</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/customer-service/#navlink=subnav" role="menuitem" tabIndex={0}>Customer Service</a></div>
			                    <div role="none"><a href="https://subscribe.miamiherald.com/beinformed" role="menuitem" tabIndex={0}>Subscribe</a></div>
			                    <div role="none"><a href="https://myaccount.miamiherald.com/mia_mh/home" role="menuitem" tabIndex={0}>Manage Print Subscription</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Advertise</span></div>
			                    <div role="none"><a href="https://go.mcclatchy.com/media-capabilities-miami/p/1" role="menuitem" tabIndex={0}>Contact McClatchy Advertising</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-2" id="menubtn-2" className="summary expander" tabIndex={0} aria-haspopup="true">Stay Connected</button>
			                <div id="menu-2" aria-labelledby="menubtn-2" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/mobile/#navlink=subnav" role="menuitem" tabIndex={0}>Mobile Apps &amp; eReaders</a></div>
			                    <div role="none"><a href="https://t.news.miamiherald.com/webApp/mccSignupPage?siteName=miamiherald" role="menuitem" tabIndex={0}>Newsletters</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/site-services/rss/#navlink=subnav" role="menuitem" tabIndex={0}>RSS Feeds</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Social Media</span></div>
			                    <div role="none"><a href="https://www.facebook.com/Miami-Herald/" role="menuitem" tabIndex={0}>Facebook</a></div>
			                    <div role="none"><a href="https://twitter.com/miamiherald/" role="menuitem" tabIndex={0}>Twitter</a></div>
			                    <div role="none"><a href="https://instagram.com/miamiherald/" role="menuitem" tabIndex={0}>Instagram</a></div>
			                    <div role="none"><a href="https://www.youtube.com/user/miamiherald/" role="menuitem" tabIndex={0}>YouTube</a></div>
			                </div>
			            </div><a href="https://www.miamiherald.com/e-edition/today/#navlink=subnav" role="menuitem" tabIndex={0}>eEdition {/*v-if*/}{/*v-if*/}</a><a href="https://www.bestofmiamidade.com/" role="menuitem" tabIndex={0}>Best of Miami {/*v-if*/}{/*v-if*/}</a>
			            <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex={-1} />
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-6" id="menubtn-6" className="summary expander" tabIndex={0} aria-haspopup="true">Condo Collapse</button>
			                <div id="menu-6" aria-labelledby="menubtn-6" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/news/special-reports/surfside-investigation/#navlink=subnav" role="menuitem" tabIndex={0}>Investigations</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/special-reports/surfside-podcast/#navlink=subnav" role="menuitem" tabIndex={0}>Podcast</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/topics/surfside-collapse-victims/#navlink=subnav" role="menuitem" tabIndex={0}>Personal Stories</a></div>
			                </div>
			            </div><a href="https://www.miamiherald.com/detour/#navlink=subnav" role="menuitem" tabIndex={0}>Detour Travel {/*v-if*/}{/*v-if*/}</a>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-8" id="menubtn-8" className="summary expander" tabIndex={0} aria-haspopup="true">News</button>
			                <div id="menu-8" aria-labelledby="menubtn-8" role="menu">
			                    <div role="none"><span className="option-label" tabIndex={-1}>Local &amp; State News</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/community/miami-dade/#navlink=subnav" role="menuitem" tabIndex={0}>Miami-Dade</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/community/broward/#navlink=subnav" role="menuitem" tabIndex={0}>Broward</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/#navlink=subnav" role="menuitem" tabIndex={0}>South Florida</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/community/florida-keys/#navlink=subnav" role="menuitem" tabIndex={0}>Florida Keys</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/state/florida/#navlink=subnav" role="menuitem" tabIndex={0}>Florida</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/crime/#navlink=subnav" role="menuitem" tabIndex={0}>Crime</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/curious305/#navlink=subnav" role="menuitem" tabIndex={0}>Curious305</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/coronavirus/#navlink=subnav" role="menuitem" tabIndex={0}>Coronavirus</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/education/#navlink=subnav" role="menuitem" tabIndex={0}>Education</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/environment/#navlink=subnav" role="menuitem" tabIndex={0}>Environment</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/health-care/#navlink=subnav" role="menuitem" tabIndex={0}>Health Care</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/immigration/#navlink=subnav" role="menuitem" tabIndex={0}>Immigration</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/recalls/#navlink=subnav" role="menuitem" tabIndex={0}>Recalls</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/weather/#navlink=subnav" role="menuitem" tabIndex={0}>Weather</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Nation &amp; World</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/nation-world/national/#navlink=subnav" role="menuitem" tabIndex={0}>United States</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/nation-world/world/americas/cuba/#navlink=subnav" role="menuitem" tabIndex={0}>Cuba</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/nation-world/world/americas/haiti/#navlink=subnav" role="menuitem" tabIndex={0}>Haiti</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/nation-world/world/americas/venezuela/#navlink=subnav" role="menuitem" tabIndex={0}>Venezuela</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/nation-world/world/americas/#navlink=subnav" role="menuitem" tabIndex={0}>Americas</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-9" id="menubtn-9" className="summary expander" tabIndex={0} aria-haspopup="true">Sports</button>
			                <div id="menu-9" aria-labelledby="menubtn-9" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/sports/#navlink=subnav" role="menuitem" tabIndex={0}>Sports</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Professional</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/nfl/miami-dolphins/#navlink=subnav" role="menuitem" tabIndex={0}>Miami Dolphins</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/fifa-world-cup/#navlink=subnav" role="menuitem" tabIndex={0}>World Cup</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/nba/miami-heat/#navlink=subnav" role="menuitem" tabIndex={0}>Miami Heat</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/mlb/miami-marlins/#navlink=subnav" role="menuitem" tabIndex={0}>Miami Marlins</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/nhl/florida-panthers/#navlink=subnav" role="menuitem" tabIndex={0}>Florida Panthers</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/mls/inter-miami/#navlink=subnav" role="menuitem" tabIndex={0}>Inter Miami</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>College</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/college/acc/university-of-miami/#navlink=subnav" role="menuitem" tabIndex={0}>University of Miami</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/college/conference-usa/florida-international-university/#navlink=subnav" role="menuitem" tabIndex={0}>Florida International</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/college/sec/university-of-florida/#navlink=subnav" role="menuitem" tabIndex={0}>University of Florida</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/college/acc/florida-state-university/#navlink=subnav" role="menuitem" tabIndex={0}>Florida State University</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Sports Columns</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/spt-columns-blogs/barry-jackson/#navlink=subnav" role="menuitem" tabIndex={0}>Barry Jackson</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/spt-columns-blogs/greg-cote/#navlink=subnav" role="menuitem" tabIndex={0}>Greg Cote</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/spt-columns-blogs/michelle-kaufman/#navlink=subnav" role="menuitem" tabIndex={0}>Michelle Kaufman</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>More Sports</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/high-school/#navlink=subnav" role="menuitem" tabIndex={0}>High School Sports</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/fighting/#navlink=subnav" role="menuitem" tabIndex={0}>Wrestling &amp; MMA</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/tennis/#navlink=subnav" role="menuitem" tabIndex={0}>Tennis</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/sports/golf/#navlink=subnav" role="menuitem" tabIndex={0}>Golf</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-10" id="menubtn-10" className="summary expander" tabIndex={0} aria-haspopup="true">Politics</button>
			                <div id="menu-10" aria-labelledby="menubtn-10" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/news/politics-government/state-politics/#navlink=subnav" role="menuitem" tabIndex={0}>Florida Politics</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/politics-government/state-politics/naked-politics/#navlink=subnav" role="menuitem" tabIndex={0}>Naked Politics</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/politics-government/election/#navlink=subnav" role="menuitem" tabIndex={0}>Elections</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/politics-government/#navlink=subnav" role="menuitem" tabIndex={0}>Political News</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/politics-government/mic-check-miami/#navlink=subnav" role="menuitem" tabIndex={0}>Mic Check Miami</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-11" id="menubtn-11" className="summary expander" tabIndex={0} aria-haspopup="true">Business</button>
			                <div id="menu-11" aria-labelledby="menubtn-11" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/news/business/#navlink=subnav" role="menuitem" tabIndex={0}>Business</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/business/real-estate-news/#navlink=subnav" role="menuitem" tabIndex={0}>Real Estate News</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/business/tourism-cruises/#navlink=subnav" role="menuitem" tabIndex={0}>Tourism &amp; Cruises</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/topics/tech-in-miami/#navlink=subnav" role="menuitem" tabIndex={0}>Tech in Miami</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/business/startup-pitch-competition/#navlink=subnav" role="menuitem" tabIndex={0}>Startup Pitch Competition</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/business/biz-monday/#navlink=subnav" role="menuitem" tabIndex={0}>Business Monday</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/money/#navlink=subnav" role="menuitem" tabIndex={0}>Personal Finance</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-12" id="menubtn-12" className="summary expander" tabIndex={0} aria-haspopup="true">Living &amp; Entertainment</button>
			                <div id="menu-12" aria-labelledby="menubtn-12" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/miami-com/restaurants/#navlink=subnav" role="menuitem" tabIndex={0}>Miami Restaurants</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/miami-com/restaurants/laventanita/#navlink=subnav" role="menuitem" tabIndex={0}>La Ventanita Podcast</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/performing-arts/#navlink=subnav" role="menuitem" tabIndex={0}>Performing Arts</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/visual-arts/#navlink=subnav" role="menuitem" tabIndex={0}>Visual Arts</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/celebrities/#navlink=subnav" role="menuitem" tabIndex={0}>Celebrities</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/#navlink=subnav" role="menuitem" tabIndex={0}>Entertainment</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/living/liv-columns-blogs/dave-barry/#navlink=subnav" role="menuitem" tabIndex={0}>Dave Barry</a></div>
			                    <div role="none"><a href="http://www.flashbackmiami.com/" role="menuitem" tabIndex={0}>Flashback Miami</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/living/health-fitness/#navlink=subnav" role="menuitem" tabIndex={0}>Health &amp; Fitness</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/comics/#navlink=subnav" role="menuitem" tabIndex={0}>Comics</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/games-puzzles/#navlink=subnav" role="menuitem" tabIndex={0}>Puzzles &amp; Games</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/entertainment/horoscopes/#navlink=subnav" role="menuitem" tabIndex={0}>Horoscopes</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/living/#navlink=subnav" role="menuitem" tabIndex={0}>Living</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/detour/#navlink=subnav" role="menuitem" tabIndex={0}>Detour</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-13" id="menubtn-13" className="summary expander" tabIndex={0} aria-haspopup="true">Opinion</button>
			                <div id="menu-13" aria-labelledby="menubtn-13" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/#navlink=subnav" role="menuitem" tabIndex={0}>All Opinion</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/editorials/#navlink=subnav" role="menuitem" tabIndex={0}>Editorials</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/op-ed/#navlink=subnav" role="menuitem" tabIndex={0}>Op-Ed</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/letters-to-the-editor/#navlink=subnav" role="menuitem" tabIndex={0}>Letters to the Editor</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/letters-to-the-editor/submit-letter/#navlink=subnav" role="menuitem" tabIndex={0}>Submit a Letter</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/editorial-board/#navlink=subnav" role="menuitem" tabIndex={0}>Meet the Editorial Board</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Columnists</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/news-columns-blogs/andres-oppenheimer/#navlink=subnav" role="menuitem" tabIndex={0}>Andres Oppenheimer</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/opn-columns-blogs/leonard-pitts-jr/#navlink=subnav" role="menuitem" tabIndex={0}>Leonard Pitts Jr.</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/news-columns-blogs/fabiola-santiago/#navlink=subnav" role="menuitem" tabIndex={0}>Fabiola Santiago</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/opinion/opn-columns-blogs/carl-hiaasen/#navlink=subnav" role="menuitem" tabIndex={0}>Carl Hiaasen</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-14" id="menubtn-14" className="summary expander" tabIndex={0} aria-haspopup="true">Obituaries</button>
			                <div id="menu-14" aria-labelledby="menubtn-14" role="menu">
			                    <div role="none"><a href="https://www.legacy.com/obituaries/herald/" role="menuitem" tabIndex={0}>Obituaries</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/news/local/obituaries/#navlink=subnav" role="menuitem" tabIndex={0}>Obituaries in the News</a></div>
			                    <div role="none"><a href="https://herald.obituaries.com" role="menuitem" tabIndex={0}>Place an Obituary</a></div>
			                </div>
			            </div>
			            <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex={-1} />
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-16" id="menubtn-16" className="summary expander" tabIndex={0} aria-haspopup="true">Sports Betting</button>
			                <div id="menu-16" aria-labelledby="menubtn-16" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/betting/#navlink=subnav" role="menuitem" tabIndex={0}>All Sports Betting</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article258259270.html/#navlink=subnav" role="menuitem" tabIndex={0}>Best Sportsbooks</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article257662833.html/#navlink=subnav" role="menuitem" tabIndex={0}>Best Sports Betting Apps</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/nfl/article262118452.html/#navlink=subnav" role="menuitem" tabIndex={0}>Super Bowl Odds</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Offers</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article257660528.html/#navlink=subnav" role="menuitem" tabIndex={0}>BetMGM Bonus Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article257659158.html/#navlink=subnav" role="menuitem" tabIndex={0}>Caesars Sportsbook Promo Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article257659208.html/#navlink=subnav" role="menuitem" tabIndex={0}>FanDuel Promo Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article257658518.html/#navlink=subnav" role="menuitem" tabIndex={0}>DraftKings Promo Code</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Maryland Betting</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article263618808.html/#navlink=subnav" role="menuitem" tabIndex={0}>Maryland Sportsbook Promos</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article257663918.html/#navlink=subnav" role="menuitem" tabIndex={0}>Maryland Sports Betting Apps</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article261343637.html/#navlink=subnav" role="menuitem" tabIndex={0}>BetMGM Maryland Bonus Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article261354972.html/#navlink=subnav" role="menuitem" tabIndex={0}>Caesars Sportsbook Maryland Promo Code</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Ohio Betting</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article263218723.html/#navlink=subnav" role="menuitem" tabIndex={0}>Ohio Sportsbook Promos</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article258182498.html/#navlink=subnav" role="menuitem" tabIndex={0}>Ohio Sports Betting Apps</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article261006742.html/#navlink=subnav" role="menuitem" tabIndex={0}>BetMGM Ohio Bonus Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article261016427.html/#navlink=subnav" role="menuitem" tabIndex={0}>Caesars Sportsbook Ohio Promo Code</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>New York Betting</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article263584558.html/#navlink=subnav" role="menuitem" tabIndex={0}>NY Sportsbook Promos</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article259877840.html/#navlink=subnav" role="menuitem" tabIndex={0}>BetMGM New York Bonus Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article259669235.html/#navlink=subnav" role="menuitem" tabIndex={0}>Caesars Sportsbook New York Promo Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article260807422.html/#navlink=subnav" role="menuitem" tabIndex={0}>DraftKings New York Promo Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article260137030.html/#navlink=subnav" role="menuitem" tabIndex={0}>FanDuel New York Promo Code</a></div>
			                    <div role="none"><span className="option-label" tabIndex={-1}>Casinos</span></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/casinos/article259183883.html/#navlink=subnav" role="menuitem" tabIndex={0}>Best Online Casinos</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/casinos/article258920023.html/#navlink=subnav" role="menuitem" tabIndex={0}>Real Money Online Casinos</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/casinos/article257663358.html/#navlink=subnav" role="menuitem" tabIndex={0}>BetMGM Casino Bonus Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/casinos/article259281884.html/#navlink=subnav" role="menuitem" tabIndex={0}>WynnBet Casino Promo Code</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/casinos/article259283369.html/#navlink=subnav" role="menuitem" tabIndex={0}>New Jersey Online Casinos</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/betting/article258696128.html/#navlink=subnav" role="menuitem" tabIndex={0}>Michigan Online Casinos</a></div>
			                </div>
			            </div>
			            <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex={-1} />
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-18" id="menubtn-18" className="summary expander" tabIndex={0} aria-haspopup="true">Shopping/Reviews</button>
			                <div id="menu-18" aria-labelledby="menubtn-18" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/product-reviews/#navlink=subnav" role="menuitem" tabIndex={0}>Product Reviews</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/health-wellness/#navlink=subnav" role="menuitem" tabIndex={0}>Health and Wellness</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/software-business/#navlink=subnav" role="menuitem" tabIndex={0}>Software and Business</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/local-services/#navlink=subnav" role="menuitem" tabIndex={0}>Local Services</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/reviews/#navlink=subnav" role="menuitem" tabIndex={0}>Reviews</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/how-to-geek/#navlink=subnav" role="menuitem" tabIndex={0}>How To Geek</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/shopping/#navlink=subnav" role="menuitem" tabIndex={0}>Shopping</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/shop-with-us/#navlink=subnav" role="menuitem" tabIndex={0}>Shop With Us</a></div>
			                </div>
			            </div><a href="https://www.miamiherald.com/press-releases/#navlink=subnav" role="menuitem" tabIndex={0}>Press Releases {/*v-if*/}{/*v-if*/}</a><a href="https://learn-a-language.miamiherald.com/" role="menuitem" tabIndex={0}>Learn a Language {/*v-if*/}{/*v-if*/}</a><a href="https://www.miamiherald.com/seniors/living/#navlink=subnav" role="menuitem" tabIndex={0}>Senior Living {/*v-if*/}{/*v-if*/}</a><a href="https://www.miamiherald.com/deals-offers/#navlink=subnav" role="menuitem" tabIndex={0}>Deals &amp; Offers {/*v-if*/}{/*v-if*/}</a>
			            <hr className="nav-divider" role="separator" aria-hidden="true" tabIndex={-1} />
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-24" id="menubtn-24" className="summary expander" tabIndex={0} aria-haspopup="true">Sponsored Content</button>
			                <div id="menu-24" aria-labelledby="menubtn-24" role="menu">
			                    <div role="none"><a href="https://www.miamiherald.com/advertise/sponsored_content/?ntv_adpz=3592/#navlink=subnav" role="menuitem" tabIndex={0}>Paid Content by BrandPoint</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/contributor-content/#navlink=subnav" role="menuitem" tabIndex={0}>Contributor Content</a></div>
			                    <div role="none"><a href="https://www.miamiherald.com/family-features/#navlink=subnav" role="menuitem" tabIndex={0}>Family Features</a></div>
			                </div>
			            </div>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-25" id="menubtn-25" className="summary expander" tabIndex={0} aria-haspopup="true">Classifieds</button>
			                <div id="menu-25" aria-labelledby="menubtn-25" role="menu">
			                    <div role="none"><a href="https://placeclassifieds.mcclatchy.com/classifieds/miami/index.html" role="menuitem" tabIndex={0}>Place a Classified Ad</a></div>
			                    <div role="none"><a href="https://classifieds.mcclatchy.com/marketplace/miami/" role="menuitem" tabIndex={0}>Browse Classifieds</a></div>
			                </div>
			            </div><a href="https://jobs.miamiherald.com/" role="menuitem" tabIndex={0}>Search Jobs {/*v-if*/}{/*v-if*/}</a><a href="https://classifieds.mcclatchy.com/marketplace/miami/" role="menuitem" tabIndex={0}>Search Legal Notices {/*v-if*/}{/*v-if*/}</a>
			            <div className="subsection" tabIndex={-1}> <button aria-controls="menu-28" id="menubtn-28" className="summary expander" tabIndex={0} aria-haspopup="true">Advertising</button>
			                <div id="menu-28" aria-labelledby="menubtn-28" role="menu">
			                    <div role="none"><a href="https://business.mcclatchy.com/miami" role="menuitem" tabIndex={0}>Place an Ad</a></div>
			                    <div role="none"><a href="https://hiring.mcclatchy.com/recruitmentproducts" role="menuitem" tabIndex={0}>Staffing Solutions</a></div>
			                    <div role="none"><a href="https://www.winwithmcclatchy.com/political-advocacy" role="menuitem" tabIndex={0}>Political | Advocacy Advertising</a></div>
			                </div>
			            </div>
			        </nav>
			    </div>
			</div>
        <div><div className="breaking-news-organism impact" />
        <article className="paper story-body" >{/**/}{/**/}
            {nonBodyWebComponents && nonBodyWebComponents.map((webComponent, i) => {
                const toolbar = nonBodyToolbars[i];

                clearMovedWebComponent(webComponent.props.name);
                return (
                  <div style={{width: "100%", maxWidth: "100vw", position: "relative", padding: 0}} key={i} >
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

              <div id="zone-el-101" className="zone zone-el" index={3} issportsarticle="true" stnplayerkill="false" allowstnplayer="true" data-type="ad"/>{/*]*/}{/*[*/}

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
