<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <canvas width="500px" height="400px" style="border: 1px solid #000;" ref="myCanvas"></canvas> -->
    <!-- <magnifier></magnifier> -->
    <!-- <Cascader></Cascader> -->
    <TreeChart :json="treeData" id="6"></TreeChart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Magnifier from './components/magnifier.vue'
import Rotate from './components/rotate.vue'
import Cascader from './components/Cascader.vue'
import TreeChart from './components/Treechart/tree'
import $ from 'jquery'
let _ = require('lodash')
export default {
  name: 'app',
  components: {
    HelloWorld,
    Magnifier,
    Rotate,
    Cascader,
    TreeChart
  },
  data() {
    return {
      treeData: {
        partnerName: '大米科技公司',
        proportionShares: '100',
        partnerType: 2,
        id: 1,
        childers: [{
          partnerName: '李明',
          proportionShares: '50',
          partnerType: 1,
          id: 2,
          partnerCode: 1
        }, {
          partnerName: '张三',
          proportionShares: '20',
          partnerType: 1,
          id: 4,
          partnerCode: 1
        }, {
          partnerName: '西米子公司',
          proportionShares: '20',
          partnerType: 2,
          id: 5,
          partnerCode: 1
        }, {
          partnerName: '其他',
          proportionShares: '10',
          partnerType: 3,
          id: 6,
          partnerCode: 1
        }]
      }
    }
  },
  created() {
    // this.test()
    // this.getData()
  },
  mounted() {
  },
  methods: {
    
    test () {
      // console.log(_.gt(3, 1))
      // console.log(_.gt(3, 3))
      var users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
      var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
      var array2 = [{ 'x': 1 }, { 'x': 4 }]

      let testtr = _.dropRightWhile(users, {'active': false});
      let testtr2 = _.dropRightWhile(users, {'active': true});
      let testtr3 = _.dropWhile(users, {'active': false});
      let testtr4 = _.intersectionWith(users,[{'user': 'pebbles', 'active': true}], {'user': 'pebbles', 'active': true});
      let testtr5 = _.zip([11, 12], [21, 22, 23], [31, 32]);
      // console.log(testtr, testtr3)
      console.log(testtr5)
    },
    getData () {
      let list = [
        {title: 'color', subList: ['red', 'yellow', 'green']},
        {title: 'size', subList: ['small', 'middle']},
        {title: 'price', subList: [100, 200, 300]}
      ]
      // let arrs = this.recoursion(list)
      // 测试的数据
      let arrs = [['红','黄', '蓝'], ['大', '中', '小']]

      /**
       * 思路: 以第一项为基础,循环合并之后的每一项再循环的值
       * @param {*} acc 累计的值
       * @param {*} cur 当前遍历项
       * @param {*} index 当前遍历索引
       */ 
      let result = arrs.reduce((acc, cur, index) => {
        // 从第二项开始合并值
        if (index > 0) {
          let saveArr = []
          acc.forEach(item => {
            cur.forEach(subItem => {
              saveArr.push(`${item},${subItem}`)
            })
          })
          acc = saveArr
        }
        return acc
      }, arrs[0]) // 把数组的第一项传入作为初始值
      console.log(result)
    },
    recoursion (list, arr) {
      let curArr = []
      if (list.length) {
        list.some(item => {
          let str = ''
          let curSubArr = []
          item.subList && item.subList.some(subItem => {
            str = `${item.title}:${subItem}`
            curSubArr.push(str)
          })
          curArr.push(curSubArr)
        })
      }
      return curArr
    },
    mathData (list) {
      list.reduce((acc, cur) => {
        let arr = []
        acc.forEach(item => {
          cur.forEach(subItem => {
            arr.push(`${item},${subItem}`)
          })
        })
        acc = arr
        return acc
      }, list[0])
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
</style>
