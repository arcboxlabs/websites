const asciiArt = String.raw`
%c
     ___                 ____                   __           __  
    /   |   _____ _____ / __ ) ____  _  __     / /   ____   / /_ 
   / /| |  / ___// ___// __  |/ __ \| |/_/    / /   / __ \// __ \
  / ___ | / /   / /__ / /_/ // /_/ />   <    / /___/ /_/ // /_/ /
 /_/  |_|/_/    \___//_____/ \____//_/|_|   /_____/\___,_\\.___/ 
`;

console.log(
  asciiArt
  + '\n%c We build high-performance container and VM runtime.\n'
  + '\n'
  + '%c Checkout our GitHub at                         %chttps://arcbox.link/github\n'
  + '%c Checkout the source code of ArcBox Desktop at  %chttps://github.com/arcboxlabs/arcbox-desktop\n'
  + '%c Checkout the source code of our core at        %chttps://github.com/arcboxlabs/arcbox\n',

  'color: #e86518; font-family: monospace; font-weight: bold;',
  'color: #e86518; font-size: 14px; font-weight: bold; padding: 4px 0;',
  'color: #999; font-size: 12px;',
  'color: #e86518; font-size: 12px; text-decoration: underline;',
  'color: #999; font-size: 12px;',
  'color: #e86518; font-size: 12px; text-decoration: underline;',
  'color: #999; font-size: 12px;',
  'color: #e86518; font-size: 12px; text-decoration: underline;'
);
