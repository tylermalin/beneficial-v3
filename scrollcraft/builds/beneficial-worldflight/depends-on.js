/* "Depends On" — the signature move.
   Hand-built, fixed dependency maps. No live AI, no conclusions: variables and
   who owns each, only. Every map carries a counsel-review marker. Edit the TREES
   data to match the sign-off copy; the render is dumb on purpose. */
(function () {
  var TREES = [
    {
      q: 'Is our token a security?',
      vars: [
        ['How the token is sold and marketed', 'you'],
        ['What the token does at launch vs. later', 'you'],
        ['How decentralized the network and effort are', 'facts'],
        ['Where buyers are and how they are reached', 'you'],
        ['Which legal framework(s) apply to that pattern', 'counsel']
      ]
    },
    {
      q: 'Do we need a Cayman foundation?',
      vars: [
        ['What the entity needs to hold or do', 'you'],
        ['Where your team, buyers, and operations sit', 'facts'],
        ['Tax posture of the founders and the entity', 'counsel'],
        ['Governance model: foundation, company, or DAO wrapper', 'you'],
        ['Banking, audit, and ongoing admin you can sustain', 'you']
      ]
    },
    {
      q: 'Can we sell carbon credits on-chain?',
      vars: [
        ['What the credit actually is: registry, methodology, vintage', 'facts'],
        ['Registry rules on tokenization and transfer', 'facts'],
        ['How the token maps to the underlying credit', 'you'],
        ['Commodity or securities characterization on-chain', 'counsel'],
        ['Buyer location and cross-border transfer rules', 'counsel']
      ]
    },
    {
      q: 'Does our AI feature trigger regulated obligations?',
      vars: [
        ['What decision the AI influences', 'you'],
        ['Sector rules for that decision', 'counsel'],
        ['Data the model uses: personal, sensitive, cross-border', 'facts'],
        ['Degree of human oversight in the loop', 'you'],
        ['Jurisdictions of your users', 'facts']
      ]
    },
    {
      q: 'Can US persons join our token sale?',
      vars: [
        ['The token’s characterization', 'counsel'],
        ['The distribution mechanism: sale, airdrop, rewards', 'you'],
        ['Eligibility controls you can enforce: KYC, geoblock', 'you'],
        ['What participants receive and when', 'you'],
        ['Exemptions or registration paths that fit', 'counsel']
      ]
    },
    {
      q: 'Which entity should hold our IP?',
      vars: [
        ['Where the IP is created and by whom', 'facts'],
        ['Who the customer is and where', 'you'],
        ['Token / foundation vs. operating-company split', 'you'],
        ['Tax and liability consequences of the holder', 'counsel'],
        ['Investor and diligence expectations', 'you']
      ]
    }
  ];
  var LABEL = { you: 'You control', counsel: 'Needs counsel', facts: 'Gather facts' };

  var qWrap = document.querySelector('.dep__qs');
  var pWrap = document.querySelector('.dep__panels');
  if (!qWrap || !pWrap) return;

  TREES.forEach(function (t, i) {
    var id = 'dep-p-' + i;

    var btn = document.createElement('button');
    btn.className = 'dep__q';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-controls', id);
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.textContent = t.q;
    qWrap.appendChild(btn);

    var panel = document.createElement('div');
    panel.className = 'dep__panel';
    panel.id = id;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('data-open', i === 0 ? 'true' : 'false');

    var h = document.createElement('h3');
    h.className = 'dep__head';
    h.textContent = t.q;
    panel.appendChild(h);

    var sub = document.createElement('p');
    sub.className = 'muted';
    sub.style.cssText = 'font-size:14px;margin:0';
    sub.textContent = 'The answer turns on these, not on a rule you can look up.';
    panel.appendChild(sub);

    var ul = document.createElement('ul');
    ul.className = 'dep__vars';
    t.vars.forEach(function (v) {
      var li = document.createElement('li');
      li.className = 'dep__var';
      var p = document.createElement('p');
      p.textContent = v[0];
      var tag = document.createElement('span');
      tag.className = 'tag tag--' + v[1];
      tag.textContent = LABEL[v[1]];
      li.appendChild(p);
      li.appendChild(tag);
      ul.appendChild(li);
    });
    panel.appendChild(ul);

    var note = document.createElement('p');
    note.className = 'dep__note';
    note.innerHTML = '<span class="mk">&#9633;</span> A map of what the answer depends on, not the answer. Structure only, reviewed by counsel.';
    panel.appendChild(note);

    var cta = document.createElement('a');
    cta.className = 'btn dep__cta';
    cta.href = 'https://cal.com/beneficialtech';
    cta.textContent = 'Resolve yours. Book a scoping call';
    panel.appendChild(cta);

    pWrap.appendChild(panel);

    btn.addEventListener('click', function () {
      qWrap.querySelectorAll('.dep__q').forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
      pWrap.querySelectorAll('.dep__panel').forEach(function (pn) { pn.setAttribute('data-open', 'false'); });
      btn.setAttribute('aria-selected', 'true');
      panel.setAttribute('data-open', 'true');
    });
  });
})();
