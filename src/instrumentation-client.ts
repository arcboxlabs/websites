const asciiArt = String.raw`
%c
     ___                 ____                   __           __
    /   |   _____ _____ / __ ) ____  _  __     / /   ____   / /_   _____
   / /| |  / ___// ___// __  |/ __ \| |/_/    / /   / __ \// __ \ / __ /
  / ___ | / /   / /__ / /_/ // /_/ />   <    / /___/ /_/ // /_/ /(__  )
 /_/  |_|/_/    \___//_____/ \____//_/|_|   /_____/\___,_\\.___//____/
`;

console.log(
  asciiArt
  + '\n%c We build high-performance container and VM runtime.\n'
  + '\n'
  + '%c Our GitHub                     https://arcbox.link/github\n'
  + '%c Source code of this website    https://github.com/arcboxlabs/websites\n'
  + '%c Source code of ArcBox core     https://github.com/arcboxlabs/arcbox\n'
  + '%c Source code of ArcBox Desktop  https://github.com/arcboxlabs/arcbox-desktop\n',

  'color: #e86518; font-family: monospace; font-weight: bold; white-space: pre;',
  'color: #e86518; font-size: 14px; font-weight: bold; padding: 4px 0; white-space: pre;',

  'color: #999; font-size: 12px; white-space: pre;',
  'color: #999; font-size: 12px; white-space: pre;',
  'color: #999; font-size: 12px; white-space: pre;',
  'color: #999; font-size: 12px; white-space: pre;'
);
