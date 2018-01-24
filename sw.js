/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/madicorp/404.html","61a493537817400b9406f69377960521"],["/madicorp/css/animate/animate.min.css","4232fe9705c172624653543520a8dd2c"],["/madicorp/css/bootstrap-social/bootstrap-social.css","f69e962258b3c7f8ee13e6ef602e7d21"],["/madicorp/css/bootstrap/css/bootstrap.min.css","08241575f58fbf9c6e11da1e282ceaf6"],["/madicorp/css/components.css","6d9f6eee41488566f95fed4ea5125aee"],["/madicorp/css/cubeportfolio/css/cubeportfolio.min.css","85da5a544fd27a6c2a050b15368f8d8e"],["/madicorp/css/custom.css","931f7c223b189d3cb52efb1b6c641d79"],["/madicorp/css/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/madicorp/css/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/madicorp/css/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/madicorp/css/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/madicorp/css/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/madicorp/css/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/madicorp/css/fancybox/jquery.fancybox.css","01a367803514b8245ff67cb3f44525d3"],["/madicorp/css/font-awesome/css/font-awesome.min.css","01124f22c22eb8bc9ab7e53c90baf36c"],["/madicorp/css/main.css","cab7b929db7bb6fb5694fe447b615065"],["/madicorp/css/owl-carousel/owl.carousel.css","dab38274282b1e14d00e465c5649a69d"],["/madicorp/css/plugins.css","7ac81bf928a36fbce62c689202206e05"],["/madicorp/css/revo-slider/assets/coloredbg.png","397e5bd80bc0fe4e18c1837deead5e72"],["/madicorp/css/revo-slider/assets/gridtile.png","bdc21cc00e9290a24aef7b34a0377dc4"],["/madicorp/css/revo-slider/assets/gridtile_3x3.png","32962e55384eb5f08af6d123119f98cf"],["/madicorp/css/revo-slider/assets/gridtile_3x3_white.png","678700e6b8d760b9990e3289611d60e3"],["/madicorp/css/revo-slider/assets/gridtile_white.png","969259228d87828935939c20a884fc24"],["/madicorp/css/revo-slider/assets/loader.gif","4b3afb84b2b71ef56df09997a350bd04"],["/madicorp/css/revo-slider/css/layers.css","09e7de528c2c4a087f8858df041d2df9"],["/madicorp/css/revo-slider/css/navigation.css","2af91e6945b1955833bf67bf3aa5f304"],["/madicorp/css/revo-slider/css/settings.css","e5ed0821a1584d93d124ebe94ab261d3"],["/madicorp/css/simple-line-icons/simple-line-icons.min.css","ffe73b2efe1ed64bdd1c40847d9ab978"],["/madicorp/css/slider-for-bootstrap/slider.css","3ca08c770be057d538fc94057242e376"],["/madicorp/css/socicon/socicon.css","671c3982a851d5384f7a0018c1b6a833"],["/madicorp/css/themes/default.css","e2b604ffd02c74ab208143d835486fa9"],["/madicorp/images/bg-97.jpg","464d6055faf603d959e55e180a6aa414"],["/madicorp/images/bg_oswald_1.jpg","b72884dbf5e26aa4f31ce2e49bd6c126"],["/madicorp/images/client-logos/client1.jpg","7edfded689d9169bbab0a5d3f00fb482"],["/madicorp/images/client-logos/client2.jpg","1c491867d5fa1bb0b533a94af01518e7"],["/madicorp/images/client-logos/client3.jpg","fac8ee7a4a53fe7e0910e6c2184258e2"],["/madicorp/images/client-logos/client4.jpg","4807f612cfd59fc17b57cfa4e11e58b5"],["/madicorp/images/client-logos/client5.jpg","f835fadef3bcace973cf004af336af9c"],["/madicorp/images/client-logos/client6.jpg","6cd0cac4e5517e8bfa7f3610a1b5943c"],["/madicorp/images/cubeportfolio/cbp-loading-popup.gif","02fa7ffdf6e503a5276562af3579cc48"],["/madicorp/images/cubeportfolio/cbp-loading.gif","be1cede97289c13920048f238fd37b85"],["/madicorp/images/cubeportfolio/cbp-sprite.png","7f6de106b01ff4792ce5a86be715f14a"],["/madicorp/images/favicons/apple-touch-icon.png","2add0d1d0b1c909c5e71d37a968bffcb"],["/madicorp/images/favicons/favicon-16x16.png","71a57c78742fa710910b09df78500767"],["/madicorp/images/favicons/favicon-32x32.png","3506cd376729cda5ccefa170eb98d981"],["/madicorp/images/line-icons/dark1.png","e7115c0d439c58741658077af3b5da98"],["/madicorp/images/line-icons/dark3.png","e61ed3a677d7a61bd97cc7d3b3b5fb97"],["/madicorp/images/line-icons/default.png","4c84cc44f13246c9383baf98bc0ef179"],["/madicorp/images/line-icons/grey1.png","46d81dc6a6ac43068de68481e0ebbcda"],["/madicorp/images/line-icons/white.png","c825d71be0ba46a3cb15bab040082549"],["/madicorp/images/logo-1.png","e7dc16dde6fd0dc786aaf63e94b8a669"],["/madicorp/images/logo-2.png","e7dc16dde6fd0dc786aaf63e94b8a669"],["/madicorp/images/logo-3.png","e7dc16dde6fd0dc786aaf63e94b8a669"],["/madicorp/images/slider/beam1.png","58925a09fff00304ebff0d1f795eb301"],["/madicorp/images/slider/beam2.png","9ac514b869d4149340395897c1923044"],["/madicorp/images/slider/beam3.png","047b4cde395fdef58984a041a34207ac"],["/madicorp/images/slider/beam4.png","5cfe254106ecc89c8ca7d723089fe37f"],["/madicorp/images/slider/blank.png","978c1bee49d7ad5fc1a4d81099b13e18"],["/madicorp/images/slider/ipad.png","0dd8ca22a7fada26ec9c70b6b99e6aca"],["/madicorp/images/slider/mac.png","a03f29b68a73293668d3c4711752c695"],["/madicorp/images/slider/map.png","a7aca3e3e152a45fc1eee288385b8c6f"],["/madicorp/images/slider/mapmarker.png","14cb9f456ba87b693c6ebe9ba17fca3e"],["/madicorp/images/solution/41.jpg","83e33e432894b8148875363eb86eefeb"],["/madicorp/images/solution/78.jpg","673e5492301cf96ba9fd2bc7fcb38495"],["/madicorp/images/solution/79.jpg","53ae6ddc211c2f446507237b6fbf8247"],["/madicorp/images/solution/90.jpg","b0a56d48bfea94531237d920b71f8c3a"],["/madicorp/images/stock/014.jpg","989b744861a53e1c42f2bdd0d56511ed"],["/madicorp/images/stock/07.jpg","5a6ed0c4c0c5499dce2b2db26e23ae3f"],["/madicorp/images/stock/08-long.jpg","33eaa094eb134ffcafc22d02e57931a6"],["/madicorp/images/stock/09.jpg","123a162d73960c769dee7d30b586f32d"],["/madicorp/images/stock/34.jpg","035f46f3c3f61cb25e47e35163cdb080"],["/madicorp/images/stock/39.jpg","a82a0b43b0e6d420f3909a2ea4dd07ae"],["/madicorp/images/stock/53.jpg","033ed0c183c77a420e26186b72b0ab1a"],["/madicorp/images/touch/128x128.jpg","48a9618b4901444fec3e100f4da40847"],["/madicorp/images/touch/144x144.jpg","69b62e8796065415fad8c885bb6dcf18"],["/madicorp/images/touch/152x152.jpg","41764cc32c5550488a1670e6d211e0fc"],["/madicorp/images/touch/192x192.jpg","d74ebb3b7b88d454b97c8bee0cd73e0f"],["/madicorp/images/touch/512x512.jpg","0a194c5119d5918e4b32fca44c232d3d"],["/madicorp/index.html","897c948b0fe378bcf31e5d0557f70111"],["/madicorp/jekyll/update/2016/09/08/welcome-to-jekyll/index.html","e7906c36512ccb266794ba694e74523d"],["/madicorp/manifest.json","b30b7e14cebd96228dced836427d04ea"],["/madicorp/package-lock.json","7280e74ec60f212e944bac78934d9e23"],["/madicorp/projects/index.html","9aaa5d3912a2fe0882c4afaba5b192a0"],["/madicorp/scripts/app.js","d03857575d9151596fb4aa9ebbe3a36e"],["/madicorp/scripts/bootstrap-slider.js","b66dbfc5dd92cdeedbdb04089560cf37"],["/madicorp/scripts/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["/madicorp/scripts/components-shop.js","f92a85cf358e68ad18242c54513c6e77"],["/madicorp/scripts/components.js","295e656f130eb3228ceb097230b5abec"],["/madicorp/scripts/custom.js","52d4d21536e4b1128845723990dfcfa8"],["/madicorp/scripts/jquery-migrate.min.js","7121994eec5320fbe6586463bf9651c2"],["/madicorp/scripts/jquery.counterup.min.js","f4063d142decf77d527e0442ec8636bf"],["/madicorp/scripts/jquery.cubeportfolio.min.js","8b3793eaba78fc2bb8b9e6a112112676"],["/madicorp/scripts/jquery.easing.min.js","780d7369372c0045a449eb56421ecba7"],["/madicorp/scripts/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/madicorp/scripts/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/madicorp/scripts/jquery.smooth-scroll.js","6d8cf1e35bdb4c89c4423c0bd1d79c62"],["/madicorp/scripts/jquery.themepunch.revolution.min.js","3d10c48a0690cfa9a92528e9c040141c"],["/madicorp/scripts/jquery.themepunch.tools.min.js","f5633c5bd400ec00d902229b43cc4206"],["/madicorp/scripts/jquery.waypoints.min.js","dfe0eedf8da578f4a4c43b05448c51d9"],["/madicorp/scripts/main.min.js","185216882f1eefa28b09bfc525ea6690"],["/madicorp/scripts/owl.carousel.min.js","ffaa3c82ad2c6e216e68aca44746e1be"],["/madicorp/scripts/projects.js","8ae8024df280f73bef72d6ef4451e471"],["/madicorp/scripts/reveal-animate.js","c83df592e8c9d0cc175b44c669388126"],["/madicorp/scripts/revolution.extension.layeranimation.min.js","135d6d3e54761997021b3f8bf943e32d"],["/madicorp/scripts/revolution.extension.navigation.min.js","f9da6b70553044d1f2d7386ba1ea0284"],["/madicorp/scripts/revolution.extension.slideanims.min.js","27c34e0025534ea63d86ce2b56826fb9"],["/madicorp/scripts/revolution.extension.video.min.js","1e88f09e8917667c49c902f0b1d13224"],["/madicorp/scripts/slider-5.js","52c781cc9fdca54ac23fbfb0310c5d1e"],["/madicorp/scripts/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/madicorp/scripts/wow.js","ea81e4551d35835e87309a679fa22df4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







