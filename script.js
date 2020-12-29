var a = document.getElementById('projects-grid');
/*
                                                  {
                                                    prolink: '',
                                                    imglink: '',
                                                    paragraph: ''
                                                  },
                                                  */
var list = [
{
  prolink: 'https://codepen.io/tznqeyiq/full/wvMxPOb',
  imglink: 'https://media2.picsearch.com/is?yR67uiGC1QoGer1ndxdS1qD5en5C3Vyyc4FZUKywEzQ&height=250',
  paragraph: 'TRIBUTE PAGE' },

{
  prolink: 'https://codepen.io/tznqeyiq/full/wvMxpjM',
  imglink: 'https://previews.dropbox.com/p/thumb/AA4wtJO8bvHEqL2yxcEpnXyk3RQbEN_rvJuybYYMRbclQMEbA8hJOCucOr0KZIszOFwbJ03ikkSKYWbBuZB9mib2ohGfHC63Pu6bqCI8KT2lQFUqlwTKo7MPwsqisvzDHqQQOau6L-kYvR3YeCn4aW6FmYhDqNT3qawlYZfyHVVR6HKjMXoacytYX7wG8Tzvpnos-l4He56KCdSGtFRMTotoBzhWlBGv0he8Lv-aaJIS2Qu_ysDAjyvGSD-VeNXu9cUc5N5psyPw28tGd9LtOjQwIXTlSHlYaWsqGz0V-sYV9js8OSIFzq4gL4REw6d2nZlrvAHilfmu-qCgKjYV1pAqg3BeEdCDkDT67Z9oOl00Pw/p.jpeg?fv_content=true&size_mode=5',
  paragraph: 'FORM' },

{
  prolink: 'https://codepen.io/tznqeyiq/full/XWXBEVd',
  imglink: 'https://media1.picsearch.com/is?yruPQEMk3koPa7J-Ii3j0HFNItjUktTrM8TB8YmN6dk&height=256',
  paragraph: 'PRODUCT LANDING' },

{
  prolink: 'https://rogue-plume-bug.glitch.me/',
  imglink: 'https://previews.dropbox.com/p/thumb/AA72cmuxS7QoEz3Oa7QO3CVsuwJdEpr3VPG2kT8EAAHzuRee-MbTM0qTgJrOpy_WVLFSaX9OrvpcbQOcCDK8objhjSDqY_wD33cxvinxSHW9uciUyA8cKkohOAsKdKtSt9mDi-TG9vtQ5CnVjelNj3I8mOe2pDKILYhzRrgCXgWmU2hfdj0LV-JKrMvj4LkWJIkrjFJkTTU0WrAerNAWE4NEd64d0Cwg5LNWXZNoOK74jAj_eEfZya3ehifUbaRinJUD3kQe1Ph4Dr7lkj68Esl0ybpMwetnxxdODTq2ofrAUnrv8LzS8jpWlR6sqabgiIHE5Y0e0Fdg16w1jG6AVTHC91nzB_cw1HFSv4cI1gue-A/p.jpeg?size=2048x1536&size_mode=3',
  paragraph: 'Metric/Imp Converter' },

{
  prolink: 'https://rhetorical-hurricane-rugby.glitch.me/',
  imglink: 'https://previews.dropbox.com/p/thumb/AA6ESykKUKlgPRR8rz08xxRFfoFO2X1aiX1xR7Bb5sF8AOcdPNPLW92zUaYVqnjk7sOCNUq3f5avvKcziV_H9HgPjiddozLBYiX1eAPM9wcaE0cOdnNg_Gzj9F1VSThTwoPAep02ybgl22_yxuWitdx-8ssUbLUt7yWJK0OWSqSFkJk3g7sy1QBNPL3MzjQr3caTRUcOstPuGWVcQBA6yaqCTtg75RGzXAgKoB_DJ_Vb5Pn_9G7pfoeQLTIW4GiiHvoNeDHWzxIUiK5sg3jEPfyOFIEpkMxVX5LsYgYeNjl3YDBD0IuMm3C1Ak4gmKZSToD86s7d1A3z0nIjBET0HGOXs0D0sdQUTC3G4drhlGCpvQ/p.jpeg?fv_content=true&size_mode=5',
  paragraph: 'Issue Tracker' },
{ prolink: 'https://hilarious-aromatic-sovereign.glitch.me/',
  imglink: 'https://previews.dropbox.com/p/thumb/AA4j8mkvCmRlFPJ4sI7Ny_t5SDammz3cpVW2hytEy1_ggCoWOBeE9fkfjCIcXQDAHqvce2Nr9z1EZ6tsjM8rAvxcxkkCCSkHBBwwLzptSvLKomtLaDOtQNkiPVciZZ6NVu9SBbe9Sl_hmga5toLDAYWv5iaqgZhmwba6tkm7TyjfMeri5CoXp60Pbu5PYKzpEbEVOjKjfDgyieBtcoqMPZWPTAOMCcjSjJ6nnb1HYLhhqhMGPrU-htAcV5jgpbSSNpe56iUX-veawCDHHDUt4UGiq5qthA6GRVnCd6GNrQUEEesoXAvPX3KdibCONiFBYxqFN-v-Zg_u1f3xmC4eIznLfrlRMEZcgZulwDFnhBhp9Q/p.jpeg?fv_content=true&size_mode=5',
  paragraph: 'Personal Library' },
{ prolink: 'https://indecisive-lofty-network.glitch.me/', imglink: 'https://previews.dropbox.com/p/thumb/AA6o6NqgWeQSXDG4naXnbGiLi_ao3sWl-MyDLzykHoSCD4lkUl_jURt2-mkToRB5dDZ5UjHObH337obV323IqnYiq_bj0VPiqiOfM40etT2lHAjP-vckMNzBg1DZQrWpnebcncm5LxlsYbVaRAdkxHTgUVhWlnh9itg12Cg3XJf0hLJn1o44fh_jnW0KToIJb4jI8xYU5Pmkzfos-4vdradxB7JUwg9qgovSwdylXt18owvFE-6LmViOCtIyGdOi2x1igsJkgDKE15XQIEcdKWB_fD8mfCKK1tUDLTSfZUemuflai6OjSJ1D6WMWx25ftPIPMWb6VD4_jgrs5skXDWHJ-3GfV78LdFyvuA9dVfnYkA/p.jpeg?fv_content=true&size_mode=5',
  paragraph: 'Sudoku Solver' }, { prolink: 'https://cuboid-working-onyx.glitch.me/', imglink: 'https://previews.dropbox.com/p/thumb/AA6mqLIiPJUcXg2DRAIc4TvyVGhMhh2pMUD4RgP7WZvnjJ_EU6BlmwqQ0qqk5qE1sMEK-9qQekz-5wFl5sHeFeEE5Caq7cKGl9zBuXkTe-EL_bBQojt1-pmWtsd6AxxDHSP8bPXzouhICMY2tJkyqB20RmAn6Pmeq6QKpoPcdbMq-S33BbzSt5sRh3xBj1EPywedBEtHrQxg_ewU5hxynEjdATWtw5H34BT5JIU-v1U14Xa4O3hgiQ0Ai_Jke1CvL8CHzQlfriN7mpt48DT1R2MMNdmZcOzQBUGC4MPD_HRUuAMtsaTSmLAWF6tBUp9hWZw-_79XJJ5pPbKHQByf3lD5liq1_qGiclGqlQGOXJXxkQ/p.jpeg?size=2048x1536&size_mode=3', paragraph: 'American british solver' }];
for (var i in list) {
  var newproject = document.createElement('div');
  newproject.setAttribute('class', 'project');
  var anchor = document.createElement('a');
  anchor.setAttribute('class', `project-tile ${i}`);
  anchor.setAttribute('target', '_blank');
  anchor.href = list[i].prolink;
  anchor.innerHTML = `<img src="${list[i].imglink}"/><p class="project-title"> ${list[i].paragraph} </p>`;
  newproject.appendChild(anchor);
  a.appendChild(newproject);
}
var modal = document.getElementById('modal-wrapper');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var smallbutton = document.getElementById('smallbutton');
function createproject(form) {
  var newobject = {
    prolink: document.getElementById('projlink').value,
    imglink: document.getElementById('projimg').value,
    paragraph: document.getElementById('projname').value };

}