// compiler macros
    var infos = function(?infos:haxe.PosInfos) { return infos; }(); // idk how else to get it to set the var other than to receive it as the last function arg
    trace(infos.fileName);   // "HaxeExamples.hx"
    trace(infos.lineNumber); // 77, b/c that's where it got set
    trace(infos.methodName); // "main"
    trace(infos.className);  // HaxeExamples
