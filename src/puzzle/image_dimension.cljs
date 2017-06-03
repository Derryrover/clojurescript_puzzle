(ns puzzle.image_dimension
  (:require
    [puzzle.model :as model]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    ))

(defn get_image_ratio []
  ( /
    (.-naturalHeight (sel1 :#js_img_id))
    (.-naturalWidth (sel1 :#js_img_id))
  )
)

(defn get_window_ratio []
  ( /
    (aget js/window "innerHeight")
    (aget js/window "innerWidth")
  )
)

(defn risize_image []

  (let [ window_ratio (get_window_ratio)
         image_ratio (get_image_ratio)
         innerWidth (aget js/window "innerWidth")
         innerHeight (aget js/window "innerHeight")
         style1 (clojure.string/join ["position:absolute;display:block;margin:auto;" "width:" innerWidth "px;" "height:" (* innerWidth image_ratio) "px;"]);;background-color:green;position:absolute;
         style2 (clojure.string/join ["position:absolute;display:block;margin:auto;" "width:" (/ innerHeight image_ratio) "px;" "height:" innerHeight "px;"]);;background-color:green;position:absolute;
         node (sel1 :#js_img_id) ;;js_img_id)]puzzle_screen
         node_puzzle (sel1 :#puzzle_screen) ;;js_img_id)]puzzle_screen
         imgs (sel :.js_img_class)]

       (if
         (> window_ratio image_ratio)
         ((fn []
           (dommy/set-attr! node :width innerWidth)
           (dommy/set-attr! node :height (* innerWidth image_ratio) )
           (doseq [img imgs] (dommy/set-attr! img :width innerWidth))
           (doseq [img imgs] (dommy/set-attr! img :height (* innerWidth image_ratio) ))
           (dommy/set-attr! node_puzzle :style style1 )
         ))
         ((fn []
           (dommy/set-attr! node :height innerHeight)
           (dommy/set-attr! node :width (/ innerHeight image_ratio) )
           (doseq [img imgs] (dommy/set-attr! img :height innerHeight))
           (doseq [img imgs] (dommy/set-attr! img :width (/ innerHeight image_ratio) ))
           (dommy/set-attr! node_puzzle :style style2 )
         ))
       )
  )
)
