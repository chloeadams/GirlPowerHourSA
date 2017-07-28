
/**
 * @fileoverview Custom functionality to apply throughout every adsize. This
 * has a dependency on common.js and utils.js
 */
var custom = (function() {

  /**
   * Classes which our JS hooks into. Add more class names as necessary.
   * @enum
   * @private
   */
  var elementClass_ = {
    item: 'js-item',
    itemName: 'js-item-name',
    itemPrice: 'js-item-price',
    itemSalePrice: 'js-item-saleprice',
    itemRegularPrice: 'js-item-regularprice',
    itemAllPrices: 'js-item-all-prices'
  };

  var elementId_ = {
    gpaDataProvider: 'gpa-data-provider',
    arrowPrevious: 'arrow-left',
    arrowNext: 'arrow-right',
    page: 'page1'
  };

  var showPrices;
  var showTitles;


  /**
   * Initialization. Called from handleAdInitialized on each page.
   */
  function init() {
    utils.log('custom.init()');
    var data = common.getAdData();
    if (!data) return;

    // If you're using the swipe gallery to display feed items.
    // initItemsUsingGallery_();

    // If you're NOT using the swipe gallery to display feed items.
    initItemsWithoutGallery_();

    if (!showPrices && !showTitles) {
      var page = document.querySelector('#' + elementId_.page);
      page.className += " no-price-or-title";
    } else if (!showPrices) {
      var page = document.querySelector('#' + elementId_.page);
      page.className += " no-price";
    } else if (!showTitles) {
      var page = document.querySelector('#' + elementId_.page);
      page.className += " no-title";
    }

  }

  function transformDynamicData () {
    var dataProvider = document.querySelector('#' + elementId_.gpaDataProvider);
    console.log("data: " + dataProvider);
    dataProvider.addDataTransformer(function(dynamicData) {
      var data = dynamicData;
      if ( !data.Headline.txt || data.Headline.txt == undefined ) {
        console.log("no headline");
        // headlineExists = false;
      } else {
        console.log(data.Headline.txt);
        // headlineExists = true;
      }

      if ( data.Design.priceSize < 1 ) {
        console.log("show no prices");
        showPrices = false;
      } else {
        console.log("show all the prices");
        showPrices = true;
      }

      if ( data.Design.nameSize < 1 ) {
        console.log("show no titles");
        showTitles = false;
      } else {
        console.log("show all the titles");
        showTitles = true;
      }

    });
  }

  

  /**
   * Find all items used in the swipe gallery and initialize custom behavior.
   * @private
   */
  function initItemsUsingGallery_() {
    var gallery = common.getGallery();

    // Apply settings to each item in the gallery
    var items = gallery.querySelectorAll('.' + elementClass_.item);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      initItemDisplay_(item);
    }
  }

  /**
   * Find all items used outside the gallery and initialize custom behavior.
   * @private
   */
  function initItemsWithoutGallery_() {
    // Apply settings to each item
    var items = document.querySelectorAll('.' + elementClass_.item);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      initItemDisplay_(item);
    }
  }

  /**
   * Set the display settings for each item.
   * Add any custom functionality you need applied on load.
   * @param {Element} item Item element.
   * @private
   */
  function initItemDisplay_(item) {

    // if you're using sales prices.
    // setSalePricesDisplay_(item);

    // Set mouseout.
    itemMouseOut(item);
  }

  /**
   * Checks size of layout and decides which specific actions to use
   */
  function checkSize(){
    var size = parseInt(common.getPageSize().width) + "x" + parseInt(common.getPageSize().height);
    var result = true;

    switch(size){
      case "320x100": case "320x50":
        result = false;
      break;
      default:
        result = true;
    }
    return result;
  }

  /**
   * Custom updates per frame shown event.
   * @param {Event event
   */
  function galleryFrameShown(event) {
    var gallery = common.getGallery();
    var itemsLength = gallery.frameCount;
    var indexFirst = common.getGalleryFrameIndexFirst(event);
    var indexLast = common.getGalleryFrameIndexLast(event);
    var arrowPrevious = utils.getElement(elementId_.arrowPrevious);
    var arrowNext = utils.getElement(elementId_.arrowNext);

    if(!checkSize()) {
      if (itemsLength < 2) {
        arrowPrevious.style.opacity = 0;
        arrowNext.style.opacity = 0;
        return;
      }
      if (indexFirst > 0) {
        arrowPrevious.style.opacity = 1;
      } else {
        arrowPrevious.style.opacity = 0;
      }
      if (indexLast < itemsLength - 1) {
        arrowNext.style.opacity = 1;
      } else {
        arrowNext.style.opacity = 0;
      }
    } else {
      if (itemsLength < 2) {
        arrowPrevious.style.opacity = 0;
        arrowNext.style.opacity = 0;
        return;
      }
      if (indexFirst > 0) {
        arrowPrevious.style.opacity = 1;
      } else {
        arrowPrevious.style.opacity = 0;
      }
      if (indexLast < itemsLength - 1) {
        arrowNext.style.opacity = 1;
      } else {
        arrowNext.style.opacity = 0;
      }
    }
  }

  /**
   * Sets the 3 price elements to display correctly when using sales price.
   * Find your price elements and set into common functionality.
   * @param {Element} item Item element.
   * @private
   */
  function setSalePricesDisplay_(item) {
    // Get reference to each price element.
    var itemPrice = item.querySelector('.' + elementClass_.itemPrice);
    var itemSalePrice = item.querySelector('.' + elementClass_.itemSalePrice);
    var itemRegularPrice = item.querySelector('.' + elementClass_.itemRegularPrice);

    // Sets each item to display correct prices.
    common.displayCorrectPrices(itemPrice, itemSalePrice, itemRegularPrice);
  }

  function customArrowMouseOver(target, event) {
    var arrowHighlight = target.children[0].children[1];
    arrowHighlight.style.opacity = 1;
  }

  function customArrowMouseOut(target, event) {
    var arrowHighlight = target.children[0].children[1];
    arrowHighlight.style.opacity = 0;
  }

  /**
   * Custom Item Mouse Interactions. Add your own behavior.
   */

  /**
   * Custom Mouseover interaction functionality.
   * @param {Element} item
   */
  function itemMouseOver(item) {

  }

  /**
   * Custom Mouseout interaction functionality.
   * @param {Element} item
   */
  function itemMouseOut(item) {

  }

  return {
    init: init,
    itemMouseOver: itemMouseOver,
    itemMouseOut: itemMouseOut,
    galleryFrameShown:galleryFrameShown,
    customArrowMouseOver:customArrowMouseOver,
    customArrowMouseOut:customArrowMouseOut,
    transformDynamicData:transformDynamicData
  };

})();
