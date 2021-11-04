/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  'lsvcdmfjrraodhrrvhcfiz7iye@o7eiltak46s2x3mao6ugdiywqv6t56rymtxfe4q@e7lhibzb3zek2zegsqjmjagw4c3zvnit3ipzuci@olmijoxgmjuty7323i6ijrv5tdhd32kefogty5i@gf2njfitdloxldekzam2flrji4@mq65ksgdrkobhiyvkoqfi7ff7i5ac3f4ijdgqji@wkmb7lejrmax2avk7bszvx7s74@4npkonnsy7xi3acvl3goi4ga5gpmpv2km4yj3di@rj7s6mzlk7uognpgua34bszhyf4cpqqtj5vfhta@olmijoxgmjutyif5p35uuja6gwp2ulsp2x6fjoi@dzfuhp3b2fz7mnj5ndxxqsradgg5bsrhuof2mbq',//账号一的好友shareCode,不同好友中间用@符号隔开
  'lsvcdmfjrraodhrrvhcfiz7iye@o7eiltak46s2x3mao6ugdiywqv6t56rymtxfe4q@e7lhibzb3zek2zegsqjmjagw4c3zvnit3ipzuci@olmijoxgmjuty7323i6ijrv5tdhd32kefogty5i@gf2njfitdloxldekzam2flrji4@mq65ksgdrkobhiyvkoqfi7ff7i5ac3f4ijdgqji@wkmb7lejrmax2avk7bszvx7s74@4npkonnsy7xi3acvl3goi4ga5gpmpv2km4yj3di@rj7s6mzlk7uognpgua34bszhyf4cpqqtj5vfhta@olmijoxgmjutyif5p35uuja6gwp2ulsp2x6fjoi@dzfuhp3b2fz7mnj5ndxxqsradgg5bsrhuof2mbq',//账号二的好友shareCode，不同好友中间用@符号隔开
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.PLANT_BEAN_SHARECODES.length > 0 && !process.env.PLANT_BEAN_SHARECODES) {
//   process.env.PLANT_BEAN_SHARECODES = logShareCodes.PLANT_BEAN_SHARECODES.join('&');
// }

// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(PLANT_BEAN_SHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
