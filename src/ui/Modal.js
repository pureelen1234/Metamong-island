/** Modal.js — 바텀시트형 모달 (일시정지·설정·퀵메뉴 공용) */
import { h, clear } from './dom.js';

export class Modal {
  constructor(root) {
    this.card = h('div', { class: 'modal-card', role: 'dialog', 'aria-modal': 'true' });
    this.backdrop = h('div', { class: 'modal' }, this.card);
    root.append(this.backdrop);
    this.isOpen = false;
    this.onClose = null;
    this.closable = true;
    this.currentId = '';

    this.backdrop.addEventListener('pointerdown', (e) => {
      if (e.target === this.backdrop && this.closable) this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.isOpen && this.closable) {
        e.preventDefault();
        this.close();
      }
    });
  }

  /**
   * @param {{id?:string, title:string, subtitle?:string, body:Node|Node[]|string, actions?:{label:string,kind?:string,onClick?:Function,disabled?:boolean}[], onClose?:Function, closable?:boolean, preserveScroll?:boolean}} opt
   */
  open(opt) {
    const {
      id = '',
      title,
      subtitle = '',
      body = '',
      actions = [],
      onClose = null,
      closable = true,
      preserveScroll = false,
    } = opt;

    const nextId = id || title || '';
    const keepScroll = this.isOpen && (preserveScroll || (nextId && nextId === this.currentId));
    const prevScroll = keepScroll ? this.card.scrollTop : 0;

    this.onClose = onClose;
    this.closable = closable;
    this.currentId = nextId;

    clear(this.card);

    this.card.append(
      h(
        'div',
        { class: 'modal-head' },
        h('div', {}, h('h2', { class: 'modal-title' }, title), subtitle ? h('p', { class: 'modal-sub' }, subtitle) : null),
        closable ? h('button', { class: 'modal-close', type: 'button', 'aria-label': '닫기', onclick: () => this.close() }, '✕') : null
      )
    );

    const bodyEl = h('div', { class: 'modal-body' });
    if (typeof body === 'string') bodyEl.append(document.createTextNode(body));
    else if (body instanceof Node) bodyEl.append(body);
    else if (Array.isArray(body)) body.forEach((b) => b && bodyEl.append(b));
    this.card.append(bodyEl);

    if (actions.length) {
      const wrap = h('div', { class: 'modal-actions' });
      for (const a of actions) {
        const btn = h('button', { class: `btn ${a.kind || ''}`, type: 'button' }, a.label);
        if (a.disabled) {
          btn.disabled = true;
          btn.setAttribute('disabled', 'disabled');
        }
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          if (a.onClick) a.onClick();
        });
        wrap.append(btn);
      }
      this.card.append(wrap);
    }

    this.backdrop.classList.add('open');
    this.isOpen = true;
    this.card.scrollTop = keepScroll ? prevScroll : 0;
  }

  close() {
    if (!this.isOpen) return;
    this.backdrop.classList.remove('open');
    this.isOpen = false;
    this.currentId = '';
    this.closable = true;
    const cb = this.onClose;
    this.onClose = null;
    if (cb) cb();
  }
}
