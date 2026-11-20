/** Modal.js — 바텀시트형 모달 (일시정지·설정·퀵메뉴 공용) */
import { h, clear } from './dom.js';

export class Modal {
  constructor(root) {
    this.card = h('div', { class: 'modal-card' });
    this.backdrop = h('div', { class: 'modal' }, this.card);
    root.append(this.backdrop);
    this.isOpen = false;
    this.onClose = null;

    this.backdrop.addEventListener('pointerdown', (e) => {
      if (e.target === this.backdrop) this.close();
    });
  }

  /**
   * @param {{title:string, subtitle?:string, body:Node|Node[]|string, actions?:{label:string,kind?:string,onClick?:Function}[], onClose?:Function, closable?:boolean}} opt
   */
  open(opt) {
    const { title, subtitle = '', body = '', actions = [], onClose = null, closable = true } = opt;
    this.onClose = onClose;

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
    this.card.scrollTop = 0;
  }

  close() {
    if (!this.isOpen) return;
    this.backdrop.classList.remove('open');
    this.isOpen = false;
    const cb = this.onClose;
    this.onClose = null;
    if (cb) cb();
  }
}
