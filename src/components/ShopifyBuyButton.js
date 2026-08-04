import React, { useEffect, useRef } from 'react';

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
const SHOP_DOMAIN = 't1h94n-18.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '542912ce1b2b23b09a1a78a8cf823c9a';

const FONT_STACK = "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const TEXT_PRIMARY = '#ffffff';
const TEXT_MUTED = '#cccccc';
const TEXT_SUBTLE = '#888888';
const ACCENT_BG = '#ffffff';
const ACCENT_TEXT = '#000000';
const ACCENT_HOVER = '#e5e5e5';
const SURFACE_INPUT = 'rgba(255, 255, 255, 0.06)';
const SURFACE_INPUT_HOVER = 'rgba(255, 255, 255, 0.1)';
const BORDER_SOFT = 'rgba(255, 255, 255, 0.18)';

const productStyles = {
  product: {
    '@media (min-width: 601px)': {
      'max-width': '100%',
      'margin-left': '0',
      'margin-bottom': '0',
    },
    'text-align': 'left',
    color: TEXT_PRIMARY,
    'font-family': FONT_STACK,
  },
  title: {
    'font-family': FONT_STACK,
    'font-size': '28px',
    'font-weight': '700',
    'letter-spacing': '-0.01em',
    color: TEXT_PRIMARY,
    'margin-bottom': '8px',
  },
  description: {
    'font-family': FONT_STACK,
    'font-size': '15px',
    'line-height': '1.7',
    color: TEXT_MUTED,
  },
  price: {
    'font-family': FONT_STACK,
    'font-size': '22px',
    'font-weight': '600',
    color: TEXT_PRIMARY,
  },
  compareAt: {
    'font-family': FONT_STACK,
    'font-size': '15px',
    color: TEXT_SUBTLE,
  },
  unitPrice: {
    'font-family': FONT_STACK,
    'font-size': '14px',
    color: TEXT_SUBTLE,
  },
  button: {
    'font-family': FONT_STACK,
    'font-weight': '700',
    'font-size': '15px',
    'letter-spacing': '0.04em',
    'text-transform': 'uppercase',
    'padding-top': '16px',
    'padding-bottom': '16px',
    'padding-left': '32px',
    'padding-right': '32px',
    'background-color': ACCENT_BG,
    color: ACCENT_TEXT,
    'border-radius': '8px',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    ':hover': { 'background-color': ACCENT_HOVER, transform: 'translateY(-1px)' },
    ':focus': { 'background-color': ACCENT_HOVER },
  },
  quantityInput: {
    'font-family': FONT_STACK,
    'font-size': '15px',
    'padding-top': '14px',
    'padding-bottom': '14px',
    'background-color': SURFACE_INPUT,
    color: TEXT_PRIMARY,
    border: `1px solid ${BORDER_SOFT}`,
    'border-radius': '8px',
  },
  quantity: {
    'background-color': SURFACE_INPUT,
    'border-radius': '8px',
    border: `1px solid ${BORDER_SOFT}`,
  },
  quantityIncrement: {
    color: TEXT_PRIMARY,
    border: 'none',
    'background-color': 'transparent',
    ':hover': { 'background-color': SURFACE_INPUT_HOVER },
  },
  quantityDecrement: {
    color: TEXT_PRIMARY,
    border: 'none',
    'background-color': 'transparent',
    ':hover': { 'background-color': SURFACE_INPUT_HOVER },
  },
  option: {
    'font-family': FONT_STACK,
    color: TEXT_PRIMARY,
  },
};

const optionStyles = {
  label: {
    'font-family': FONT_STACK,
    'font-size': '13px',
    'font-weight': '600',
    'letter-spacing': '0.1em',
    'text-transform': 'uppercase',
    color: TEXT_MUTED,
    'margin-bottom': '8px',
  },
  select: {
    'font-family': FONT_STACK,
    'font-size': '15px',
    'background-color': '#1a1a1a',
    color: TEXT_PRIMARY,
    border: `1px solid ${BORDER_SOFT}`,
    'border-radius': '8px',
    'padding-top': '12px',
    'padding-bottom': '12px',
    'padding-left': '14px',
    'padding-right': '40px',
    cursor: 'pointer',
    ':hover': { 'background-color': '#222222', 'border-color': 'rgba(255,255,255,0.3)' },
    ':focus': { 'border-color': '#ffffff', outline: 'none' },
  },
  selectIcon: {
    fill: TEXT_PRIMARY,
  },
  wrapper: {
    'margin-bottom': '20px',
  },
};

const cartStyles = {
  cart: {
    'background-color': '#0a0a0a',
    color: TEXT_PRIMARY,
    'font-family': FONT_STACK,
  },
  header: {
    'background-color': '#0a0a0a',
    color: TEXT_PRIMARY,
    border: 'none',
  },
  title: {
    'font-family': FONT_STACK,
    color: TEXT_PRIMARY,
    'font-weight': '700',
  },
  lineItems: {
    color: TEXT_PRIMARY,
  },
  footer: {
    'background-color': '#0a0a0a',
    'border-top': `1px solid ${BORDER_SOFT}`,
  },
  subtotalText: {
    'font-family': FONT_STACK,
    color: TEXT_MUTED,
    'font-size': '14px',
    'text-transform': 'uppercase',
    'letter-spacing': '0.08em',
  },
  subtotal: {
    'font-family': FONT_STACK,
    color: TEXT_PRIMARY,
    'font-size': '20px',
    'font-weight': '700',
  },
  notice: {
    color: TEXT_MUTED,
    'font-size': '13px',
  },
  currency: {
    color: TEXT_PRIMARY,
  },
  close: {
    color: TEXT_PRIMARY,
    ':hover': { color: '#cccccc' },
  },
  emptyCart: {
    color: TEXT_MUTED,
    'font-family': FONT_STACK,
  },
  button: {
    'font-family': FONT_STACK,
    'font-weight': '700',
    'font-size': '15px',
    'letter-spacing': '0.04em',
    'text-transform': 'uppercase',
    'padding-top': '16px',
    'padding-bottom': '16px',
    'background-color': ACCENT_BG,
    color: ACCENT_TEXT,
    'border-radius': '8px',
    ':hover': { 'background-color': ACCENT_HOVER },
    ':focus': { 'background-color': ACCENT_HOVER },
  },
};

const lineItemStyles = {
  lineItem: {
    color: TEXT_PRIMARY,
    'background-color': 'transparent',
    'border-bottom': `1px solid rgba(255,255,255,0.08)`,
  },
  variantTitle: {
    color: TEXT_MUTED,
    'font-family': FONT_STACK,
  },
  title: {
    color: TEXT_PRIMARY,
    'font-family': FONT_STACK,
    'font-weight': '600',
  },
  price: {
    color: TEXT_PRIMARY,
    'font-family': FONT_STACK,
  },
  fullPrice: {
    color: TEXT_PRIMARY,
  },
  discount: {
    color: TEXT_MUTED,
  },
  discountIcon: {
    fill: TEXT_MUTED,
  },
  quantity: {
    'background-color': SURFACE_INPUT,
    'border-radius': '6px',
    border: `1px solid ${BORDER_SOFT}`,
  },
  quantityIncrement: {
    color: TEXT_PRIMARY,
    'background-color': 'transparent',
    border: 'none',
    ':hover': { 'background-color': SURFACE_INPUT_HOVER },
  },
  quantityDecrement: {
    color: TEXT_PRIMARY,
    'background-color': 'transparent',
    border: 'none',
    ':hover': { 'background-color': SURFACE_INPUT_HOVER },
  },
  quantityInput: {
    color: TEXT_PRIMARY,
    'background-color': 'transparent',
    'font-family': FONT_STACK,
  },
};

const toggleStyles = {
  toggle: {
    'font-family': FONT_STACK,
    'font-weight': '700',
    'background-color': ACCENT_BG,
    color: ACCENT_TEXT,
    ':hover': { 'background-color': ACCENT_HOVER },
    ':focus': { 'background-color': ACCENT_HOVER },
  },
  count: {
    'font-size': '16px',
    color: ACCENT_TEXT,
  },
  iconPath: {
    fill: ACCENT_TEXT,
  },
};

const componentOptions = {
  product: {
    styles: productStyles,
    layout: 'horizontal',
    contents: { img: false, imgWithCarousel: true, description: true },
    width: '100%',
    text: { button: 'Add to cart' },
  },
  productSet: {
    styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } },
  },
  modalProduct: {
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0px',
          'margin-bottom': '0px',
        },
        'background-color': '#0a0a0a',
        color: TEXT_PRIMARY,
      },
      title: {
        'font-family': FONT_STACK,
        'font-weight': '700',
        'font-size': '28px',
        color: TEXT_PRIMARY,
      },
      description: {
        'font-family': FONT_STACK,
        'font-size': '15px',
        'line-height': '1.7',
        color: TEXT_MUTED,
      },
      price: {
        'font-family': FONT_STACK,
        'font-weight': '600',
        'font-size': '22px',
        color: TEXT_PRIMARY,
      },
      compareAt: {
        'font-family': FONT_STACK,
        'font-size': '15px',
        color: TEXT_SUBTLE,
      },
      unitPrice: {
        'font-family': FONT_STACK,
        'font-size': '14px',
        color: TEXT_SUBTLE,
      },
      button: productStyles.button,
      quantityInput: productStyles.quantityInput,
      quantity: productStyles.quantity,
      quantityIncrement: productStyles.quantityIncrement,
      quantityDecrement: productStyles.quantityDecrement,
    },
    text: { button: 'Add to cart' },
  },
  modal: {
    styles: {
      modal: {
        'background-color': '#0a0a0a',
      },
    },
  },
  option: {
    styles: optionStyles,
  },
  cart: {
    styles: cartStyles,
    text: { total: 'Subtotal', button: 'Checkout' },
  },
  lineItem: {
    styles: lineItemStyles,
  },
  toggle: {
    styles: toggleStyles,
  },
};

let sdkPromise = null;
const loadSdk = () => {
  if (window.ShopifyBuy && window.ShopifyBuy.UI) return Promise.resolve(window.ShopifyBuy);
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = SDK_URL;
    script.onload = () => resolve(window.ShopifyBuy);
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return sdkPromise;
};

const ShopifyBuyButton = ({ productId, collectionId }) => {
  const nodeRef = useRef(null);
  const componentRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const mountNode = nodeRef.current;
    const componentType = collectionId ? 'collection' : 'product';
    const id = collectionId || productId;

    loadSdk().then((ShopifyBuy) => {
      if (cancelled || !mountNode) return;
      const client = ShopifyBuy.buildClient({
        domain: SHOP_DOMAIN,
        storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
      });
      return ShopifyBuy.UI.onReady(client).then((ui) =>
        ui.createComponent(componentType, {
          id,
          node: mountNode,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: componentOptions,
        }),
      );
    }).then((component) => {
      if (!component) return;
      if (cancelled) {
        if (typeof component.destroy === 'function') component.destroy();
        return;
      }
      componentRef.current = component;
    }).catch(() => {});

    return () => {
      cancelled = true;
      const component = componentRef.current;
      componentRef.current = null;
      if (component && typeof component.destroy === 'function') {
        try { component.destroy(); } catch (_) { /* noop */ }
      }
      if (mountNode) mountNode.innerHTML = '';
    };
  }, [productId, collectionId]);

  return (
    <div className="shopify-frame">
      <div ref={nodeRef} className="shopify-frame-mount" />
    </div>
  );
};

export default ShopifyBuyButton;
